import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Send } from 'lucide-react';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formValues.name.trim()) {
      newErrors.name = 'Vul uw naam in';
    }
    
    if (!formValues.email.trim()) {
      newErrors.email = 'Vul uw e-mail in';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Vul een geldig e-mailadres in';
    }
    
    if (!formValues.message.trim()) {
      newErrors.message = 'Vul een bericht in';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_KEY,
            ...formValues,
          }),
        });

        const data = await response.json();
        
        if (data.success) {
          setSubmitSuccess(true);
          setFormValues({
            name: '',
            email: '',
            message: ''
          });
          
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        }
      } catch (error) {
        console.error('Error sending form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Naam <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
            errors.name ? 'border-red-500' : 'border-slate-300'
          }`}
          placeholder="Uw naam"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          E-mail <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
            errors.email ? 'border-red-500' : 'border-slate-300'
          }`}
          placeholder="uw@email.nl"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Bericht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
            errors.message ? 'border-red-500' : 'border-slate-300'
          }`}
          placeholder="Vraag een offerte aan of stel je vraag – we nemen zo snel mogelijk contact met je op."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>
      
      <div>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full flex justify-center items-center"
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
              <span>Versturen...</span>
            </div>
          ) : (
            <>
              Verstuur <Send size={18} className="ml-2" />
            </>
          )}
        </Button>
      </div>

      {submitSuccess && (
        <motion.div 
          className="p-4 bg-green-100 text-green-700 rounded-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;