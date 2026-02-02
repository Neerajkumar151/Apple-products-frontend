import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Loader2, Check, X } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  
  const { signUp, signInWithGoogle} = useAuth();
  const navigate = useNavigate();
  
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // Password validation
  const passwordChecks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
  };
  const isPasswordValid = Object.values(passwordChecks).every(Boolean);
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;


  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: -30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo(
        '.auth-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(
        '.auth-subtitle',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo(
        '.form-element',
        { opacity: 0, y: 25, scale: 0.98 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.5, 
          stagger: 0.06,
          ease: 'power2.out' 
        },
        '-=0.2'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !password || !confirmPassword) {
  toast.warning('All fields are required');
  return;
}


    if (!isPasswordValid) {
  toast.warning('Password does not meet requirements');
  return;
}

if (!passwordsMatch) {
  toast.warning('Passwords do not match');
  return;
}


    setIsLoading(true);
    const { error } = await signUp(email, password, fullName);
    setIsLoading(false);

    if (error) {
  if (error.message.toLowerCase().includes('already registered')) {
    toast.warning('An account with this email already exists');
  } else {
    toast.error(error.message);
  }
  return;
}

toast.success('Account created! Check your email to verify.');
navigate('/login');


  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    const { error } = await signInWithGoogle();
    setIsGoogleLoading(false);

    if (error) {
  toast.error(error.message || 'Failed to sign in with Google');
} else {
  toast.success('Signed in with Google ✨');
}

  };

  const PasswordCheck = ({ isValid, label }: { isValid: boolean; label: string }) => (
    <div className={`flex items-center gap-2 text-body-sm transition-colors duration-300 ${isValid ? 'text-green-600' : 'text-apple-gray-300'}`}>
      {isValid ? (
        <Check className="h-4 w-4" />
      ) : (
        <X className="h-4 w-4" />
      )}
      {label}
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className="min-h-screen pt-20 pb-12 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-apple-gray-50 via-white to-apple-gray-50"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div ref={logoRef} className="flex justify-center mb-8">
          <Link to="/" className="block">
            <img 
              src="/apple.svg" 
              alt="Apple" 
              className="h-12 w-12 opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </Link>
        </div>

        {/* Card */}
        <div className="glass rounded-3xl p-8 sm:p-10 shadow-apple-lg border border-white/50">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="auth-title text-display-sm font-semibold text-apple-gray-500 tracking-tight mb-2">
              Create Your
            </h1>
            <h2 className="auth-title text-display-sm font-semibold text-apple-gray-500 tracking-tight mb-2">
              Apple ID
            </h2>
            <p className="auth-subtitle text-body text-apple-gray-300">
              One account for everything Apple
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Input */}
            <div className="form-element relative">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-apple-gray-300 pointer-events-none" />
                <Input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  className="h-14 pl-12 pr-4 text-body bg-apple-gray-50/50 border-apple-gray-100 rounded-xl focus:bg-white transition-all duration-300"
                  autoComplete="name"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="form-element relative">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-apple-gray-300 pointer-events-none" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="h-14 pl-12 pr-4 text-body bg-apple-gray-50/50 border-apple-gray-100 rounded-xl focus:bg-white transition-all duration-300"
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="form-element relative">
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-apple-gray-300 pointer-events-none" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="h-14 pl-12 pr-12 text-body bg-apple-gray-50/50 border-apple-gray-100 rounded-xl focus:bg-white transition-all duration-300"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-apple-gray-300 hover:text-apple-gray-500 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            {password.length > 0 && (
              <div className="form-element px-1 py-2 grid grid-cols-2 gap-2">
                <PasswordCheck isValid={passwordChecks.length} label="8+ characters" />
                <PasswordCheck isValid={passwordChecks.uppercase} label="Uppercase" />
                <PasswordCheck isValid={passwordChecks.lowercase} label="Lowercase" />
                <PasswordCheck isValid={passwordChecks.number} label="Number" />
              </div>
            )}

            {/* Confirm Password Input */}
            <div className="form-element relative">
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-apple-gray-300 pointer-events-none" />
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className={`h-14 pl-12 pr-12 text-body bg-apple-gray-50/50 border-apple-gray-100 rounded-xl focus:bg-white transition-all duration-300 ${
                    confirmPassword.length > 0 && !passwordsMatch ? 'border-destructive focus-visible:ring-destructive/20' : ''
                  }`}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-apple-gray-300 hover:text-apple-gray-500 transition-colors duration-200"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {confirmPassword.length > 0 && !passwordsMatch && (
                <p className="text-body-sm text-destructive mt-2 ml-1">Passwords do not match</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-element pt-3">
              <Button
                type="submit"
                disabled={isLoading || !isPasswordValid || !passwordsMatch}
                className="w-full h-14 rounded-xl bg-primary text-white font-medium text-body hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Create Apple ID
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Divider */}
          <div className="form-element relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-apple-gray-100" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white/80 text-apple-gray-300">or</span>
            </div>
          </div>

          {/* Google Sign In */}
          <div className="form-element">
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignIn}
              disabled={isGoogleLoading}
              className="w-full h-14 rounded-xl border-apple-gray-100 bg-white hover:bg-apple-gray-50 text-apple-gray-500 font-medium text-body transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {isGoogleLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </>
              )}
            </Button>
          </div>

          {/* Links */}
          <div className="form-element mt-6 text-center">
            <p className="text-body-sm text-apple-gray-300">
              Already have an Apple ID?{' '}
              <Link 
                to="/login" 
                className="text-primary font-medium hover:underline transition-colors duration-200"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="form-element mt-8 text-center text-caption text-apple-gray-300 max-w-sm mx-auto">
          By creating an Apple ID, you agree to the{' '}
          <Link to="/footer/terms-of-use" className="text-primary hover:underline">Terms of Service</Link>
          {' '}and{' '}
          <Link to="/footer/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
