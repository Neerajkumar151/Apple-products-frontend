import { useState, useCallback, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ChevronLeft, CreditCard, Truck, Shield, Check, AlertCircle } from 'lucide-react';
// Toast notifications can be added here

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvv: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function CheckoutPage() {
  const { items, subtotal, tax, shipping, orderTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<'shipping' | 'payment'>('shipping');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      navigate('/cart');
    }
  }, [items, navigate]);

  // Validation functions
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateZip = (zip: string) => {
    return /^\d{5}(-\d{4})?$/.test(zip);
  };

  const validatePhone = (phone: string) => {
    return phone.length >= 10;
  };

  const validateCardNumber = (card: string) => {
    const cleaned = card.replace(/\s/g, '');
    return /^\d{13,19}$/.test(cleaned);
  };

  const validateExpiry = (expiry: string) => {
    return /^\d{2}\/\d{2}$/.test(expiry);
  };

  const validateCVV = (cvv: string) => {
    return /^\d{3,4}$/.test(cvv);
  };

  const validateField = (name: string, value: string): string => {
    if (!value.trim()) return `${name} is required`;
    
    switch (name) {
      case 'email':
        if (!validateEmail(value)) return 'Please enter a valid email';
        break;
      case 'zip':
        if (!validateZip(value)) return 'Please enter a valid ZIP code';
        break;
      case 'phone':
        if (!validatePhone(value)) return 'Please enter a valid phone number';
        break;
      case 'cardNumber':
        if (!validateCardNumber(value)) return 'Please enter a valid card number';
        break;
      case 'expiry':
        if (!validateExpiry(value)) return 'Use format MM/YY';
        break;
      case 'cvv':
        if (!validateCVV(value)) return 'CVV must be 3-4 digits';
        break;
    }
    return '';
  };

  const validateStep = (currentStep: 'shipping' | 'payment'): boolean => {
    const newErrors: FormErrors = {};
    const fieldsToValidate = currentStep === 'shipping' 
      ? ['email', 'firstName', 'lastName', 'address', 'city', 'state', 'zip']
      : ['cardNumber', 'cardName', 'expiry', 'cvv'];

    fieldsToValidate.forEach(field => {
      const error = validateField(field, formData[field as keyof FormData] || '');
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => new Set(prev).add(name));
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, []);

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(' ') : cleaned;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData(prev => ({ ...prev, cardNumber: formatted }));
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep('shipping')) {
      setStep('payment');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep('payment')) {
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    clearCart();
    navigate('/order-confirmation');
  };

  if (items.length === 0) return null;

  return (
    <div className="min-h-screen bg-apple-gray-50 pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link
            to="/cart"
            className="flex items-center text-apple-blue hover:underline text-body"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Bag
          </Link>
        </div>

        <h1 className="text-display-md font-semibold text-apple-gray-500 mb-8">
          Checkout
        </h1>

        {/* Progress */}
        <div className="flex items-center gap-4 mb-12">
          <div
            className={`flex items-center gap-2 ${
              step === 'shipping' ? 'text-apple-blue' : 'text-apple-gray-500'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === 'shipping'
                  ? 'bg-apple-blue text-white'
                  : 'bg-apple-gray-200 text-apple-gray-500'
              }`}
            >
              {step === 'payment' ? <Check className="w-4 h-4" /> : '1'}
            </div>
            <span className="text-body font-medium">Shipping</span>
          </div>
          <div className="flex-1 h-px bg-apple-gray-200" />
          <div
            className={`flex items-center gap-2 ${
              step === 'payment' ? 'text-apple-blue' : 'text-apple-gray-300'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === 'payment'
                  ? 'bg-apple-blue text-white'
                  : 'bg-apple-gray-100 text-apple-gray-300'
              }`}
            >
              2
            </div>
            <span className="text-body font-medium">Payment</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === 'shipping' ? (
              <form
                onSubmit={handleShippingSubmit}
                className="bg-white rounded-apple p-6 sm:p-8 shadow-apple"
              >
                <h2 className="text-headline font-semibold text-apple-gray-500 mb-6 flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  Shipping Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-caption font-medium text-apple-gray-500 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full border rounded-apple px-4 py-3 text-body text-apple-gray-500 outline-none transition-colors ${
                        errors.email && touched.has('email')
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-apple-gray-200 focus:border-apple-blue'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && touched.has('email') && (
                      <p className="text-caption text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-caption font-medium text-apple-gray-500 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full border rounded-apple px-4 py-3 text-body text-apple-gray-500 outline-none transition-colors ${
                          errors.firstName && touched.has('firstName')
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-apple-gray-200 focus:border-apple-blue'
                        }`}
                        placeholder="John"
                      />
                      {errors.firstName && touched.has('firstName') && (
                        <p className="text-caption text-red-500 mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-caption font-medium text-apple-gray-500 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full border rounded-apple px-4 py-3 text-body text-apple-gray-500 outline-none transition-colors ${
                          errors.lastName && touched.has('lastName')
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-apple-gray-200 focus:border-apple-blue'
                        }`}
                        placeholder="Doe"
                      />
                      {errors.lastName && touched.has('lastName') && (
                        <p className="text-caption text-red-500 mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-caption font-medium text-apple-gray-500 mb-2">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full border rounded-apple px-4 py-3 text-body text-apple-gray-500 outline-none transition-colors ${
                        errors.address && touched.has('address')
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-apple-gray-200 focus:border-apple-blue'
                      }`}
                      placeholder="123 Main Street"
                    />
                    {errors.address && touched.has('address') && (
                      <p className="text-caption text-red-500 mt-1">{errors.address}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-caption font-medium text-apple-gray-500 mb-2">
                      Apartment, suite, etc. (optional)
                    </label>
                    <input
                      type="text"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleInputChange}
                      className="w-full border border-apple-gray-200 rounded-apple px-4 py-3 text-body text-apple-gray-500 outline-none focus:border-apple-blue transition-colors"
                      placeholder="Apt 4B"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-caption font-medium text-apple-gray-500 mb-2">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full border rounded-apple px-4 py-3 text-body text-apple-gray-500 outline-none transition-colors ${
                          errors.city && touched.has('city')
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-apple-gray-200 focus:border-apple-blue'
                        }`}
                        placeholder="New York"
                      />
                      {errors.city && touched.has('city') && (
                        <p className="text-caption text-red-500 mt-1">{errors.city}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-caption font-medium text-apple-gray-500 mb-2">
                        State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full border rounded-apple px-4 py-3 text-body text-apple-gray-500 outline-none transition-colors ${
                          errors.state && touched.has('state')
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-apple-gray-200 focus:border-apple-blue'
                        }`}
                        placeholder="NY"
                      />
                      {errors.state && touched.has('state') && (
                        <p className="text-caption text-red-500 mt-1">{errors.state}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-caption font-medium text-apple-gray-500 mb-2">
                        ZIP Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full border rounded-apple px-4 py-3 text-body text-apple-gray-500 outline-none transition-colors ${
                          errors.zip && touched.has('zip')
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-apple-gray-200 focus:border-apple-blue'
                        }`}
                        placeholder="10001"
                      />
                      {errors.zip && touched.has('zip') && (
                        <p className="text-caption text-red-500 mt-1">{errors.zip}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-caption font-medium text-apple-gray-500 mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full border rounded-apple px-4 py-3 text-body text-apple-gray-500 outline-none transition-colors ${
                        errors.phone && touched.has('phone')
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-apple-gray-200 focus:border-apple-blue'
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && touched.has('phone') && (
                      <p className="text-caption text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-apple w-full mt-8"
                >
                  Continue to Payment
                </button>
              </form>
            ) : (
              <form
                onSubmit={handlePaymentSubmit}
                className="bg-white rounded-apple p-6 sm:p-8 shadow-apple"
              >
                <h2 className="text-headline font-semibold text-apple-gray-500 mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-caption font-medium text-apple-gray-500 mb-2">
                      Card Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleCardNumberChange}
                      onBlur={handleBlur}
                      maxLength={19}
                      className={`w-full border rounded-apple px-4 py-3 text-body text-apple-gray-500 outline-none transition-colors ${
                        errors.cardNumber && touched.has('cardNumber')
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-apple-gray-200 focus:border-apple-blue'
                      }`}
                      placeholder="1234 5678 9012 3456"
                    />
                    {errors.cardNumber && touched.has('cardNumber') && (
                      <p className="text-caption text-red-500 mt-1">{errors.cardNumber}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-caption font-medium text-apple-gray-500 mb-2">
                      Cardholder Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full border rounded-apple px-4 py-3 text-body text-apple-gray-500 outline-none transition-colors ${
                        errors.cardName && touched.has('cardName')
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-apple-gray-200 focus:border-apple-blue'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.cardName && touched.has('cardName') && (
                      <p className="text-caption text-red-500 mt-1">{errors.cardName}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-caption font-medium text-apple-gray-500 mb-2">
                        Expiry Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        maxLength={5}
                        className={`w-full border rounded-apple px-4 py-3 text-body text-apple-gray-500 outline-none transition-colors ${
                          errors.expiry && touched.has('expiry')
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-apple-gray-200 focus:border-apple-blue'
                        }`}
                        placeholder="MM/YY"
                      />
                      {errors.expiry && touched.has('expiry') && (
                        <p className="text-caption text-red-500 mt-1">{errors.expiry}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-caption font-medium text-apple-gray-500 mb-2">
                        CVV <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        maxLength={4}
                        className={`w-full border rounded-apple px-4 py-3 text-body text-apple-gray-500 outline-none transition-colors ${
                          errors.cvv && touched.has('cvv')
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-apple-gray-200 focus:border-apple-blue'
                        }`}
                        placeholder="123"
                      />
                      {errors.cvv && touched.has('cvv') && (
                        <p className="text-caption text-red-500 mt-1">{errors.cvv}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep('shipping')}
                    className="flex-1 py-3 px-6 rounded-full border border-apple-gray-200 text-apple-gray-500 font-medium hover:bg-apple-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="flex-1 btn-apple disabled:opacity-70"
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      'Place Order'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-apple p-6 shadow-apple sticky top-28">
              <h2 className="text-headline font-semibold text-apple-gray-500 mb-6">
                Order Summary
              </h2>

              {/* Items */}
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto scrollbar-hide">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-14 h-14 flex-shrink-0 bg-apple-gray-50 rounded-apple overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-body font-medium text-apple-gray-500 truncate">
                        {item.name}
                      </p>
                      <p className="text-caption text-apple-gray-300">
                        Qty: {item.quantity}
                      </p>
                      {item.color && (
                        <p className="text-caption text-apple-gray-300">
                          {item.color}
                        </p>
                      )}
                    </div>
                    <p className="text-body font-medium text-apple-gray-500">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-apple-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-body text-apple-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-body text-apple-gray-300">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-apple-green' : ''}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-body text-apple-gray-300">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-apple-gray-100 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-headline font-semibold text-apple-gray-500">Total</span>
                  <div className="text-right">
                    <span className="text-display-sm font-semibold text-apple-gray-500">
                      ${orderTotal.toFixed(2)}
                    </span>
                    <p className="text-caption text-apple-gray-300">USD</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-caption text-apple-gray-300">
                <Shield className="w-4 h-4 text-apple-green" />
                Secure checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
