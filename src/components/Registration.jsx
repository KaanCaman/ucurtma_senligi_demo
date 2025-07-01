import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  Users,
  Baby,
  MessageSquare,
} from "lucide-react";
import { uiText } from "../constants/uiText";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    participants: "",
    childrenCount: "",
    message: "",
    agreement: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Form validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.participants ||
      !formData.agreement
    ) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send data to your backend
      console.log("Form Data:", formData);

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        participants: "",
        childrenCount: "",
        message: "",
        agreement: false,
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors";
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <section id="kayit" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {uiText.registration.title}
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-8"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {uiText.registration.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 lg:p-12 shadow-lg">
            {submitStatus === "success" && (
              <div className="mb-8 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <p className="text-green-700 font-medium">
                  {uiText.registration.form.success}
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-8 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <p className="text-red-700 font-medium">
                  {uiText.registration.form.error}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className={labelClasses}>
                    <User className="w-4 h-4 inline mr-2" />
                    {uiText.registration.form.fullName.label} *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={uiText.registration.form.fullName.placeholder}
                    className={inputClasses}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={labelClasses}>
                    <Mail className="w-4 h-4 inline mr-2" />
                    {uiText.registration.form.email.label} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={uiText.registration.form.email.placeholder}
                    className={inputClasses}
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className={labelClasses}>
                    <Phone className="w-4 h-4 inline mr-2" />
                    {uiText.registration.form.phone.label} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={uiText.registration.form.phone.placeholder}
                    className={inputClasses}
                    required
                  />
                </div>

                {/* Participants */}
                <div>
                  <label className={labelClasses}>
                    <Users className="w-4 h-4 inline mr-2" />
                    {uiText.registration.form.participants.label} *
                  </label>
                  <input
                    type="number"
                    name="participants"
                    value={formData.participants}
                    onChange={handleChange}
                    placeholder={
                      uiText.registration.form.participants.placeholder
                    }
                    className={inputClasses}
                    min="1"
                    max="20"
                    required
                  />
                </div>

                {/* Children Count */}
                <div>
                  <label className={labelClasses}>
                    <Baby className="w-4 h-4 inline mr-2" />
                    {uiText.registration.form.childrenCount.label}
                  </label>
                  <input
                    type="number"
                    name="childrenCount"
                    value={formData.childrenCount}
                    onChange={handleChange}
                    placeholder={
                      uiText.registration.form.childrenCount.placeholder
                    }
                    className={inputClasses}
                    min="0"
                    max="10"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className={labelClasses}>
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  {uiText.registration.form.message.label}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={uiText.registration.form.message.placeholder}
                  className={`${inputClasses} h-32 resize-none`}
                  rows="4"
                />
              </div>

              {/* Agreement */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                  required
                />
                <label className="text-sm text-gray-700">
                  {uiText.registration.form.agreement} *
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl hover:from-sky-600 hover:to-blue-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-3 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Gönderiliyor...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{uiText.registration.form.submit}</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-sky-600 mb-2">
                  Ücretsiz
                </div>
                <div className="text-gray-600">Katılım Tamamen Ücretsiz</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-sky-600 mb-2">
                  Malzemeler
                </div>
                <div className="text-gray-600">Uçurtma Kitleri Hediye</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-sky-600 mb-2">
                  Yemek
                </div>
                <div className="text-gray-600">Kendi Pikniğinizi Getirin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
