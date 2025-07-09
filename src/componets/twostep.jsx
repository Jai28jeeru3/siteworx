import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const TwoStepSignup = ({ email, isForgotPassword }) => {
    const [step, setStep] = useState(isForgotPassword ? 2 : 1);
    const [formData, setFormData] = useState({
        email: email || '',
        password: '',
        confirmPassword: '',
        fullName: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    // Auto-fill email if provided
    useEffect(() => {
        if (email) {
            setFormData(prev => ({ ...prev, email }));
        }
    }, [email]);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Validate step 1 form
    const validateStep1 = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle step 1 submission
    const handleStep1Submit = async () => {
        if (!validateStep1()) return;

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setStep(2);
        }, 1500);
    };

    const styles = {
        container: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #FCF0FC 0%, #BBEBFA 100%)',
            padding: '20px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        },
        card: {
            background: 'white',
            borderRadius: '16px',
            padding: '40px',
            width: '100%',
            maxWidth: '440px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            position: 'relative'
        },
        header: {
            textAlign: 'center',
            marginBottom: '32px'
        },
        title: {
            fontSize: '28px',
            fontWeight: '700',
            color: '#1a202c',
            marginBottom: '8px'
        },
        subtitle: {
            fontSize: '16px',
            color: '#718096',
            lineHeight: '1.5'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        },
        inputGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
        },
        label: {
            fontSize: '14px',
            fontWeight: '600',
            color: '#374151'
        },
        input: {
            padding: '12px 16px',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '16px',
            transition: 'all 0.2s ease',
            outline: 'none'
        },
        inputFocus: {
            borderColor: '#667eea',
            boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)'
        },
        inputError: {
            borderColor: '#ef4444'
        },
        error: {
            color: '#ef4444',
            fontSize: '14px',
            marginTop: '4px'
        },
        button: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '14px 24px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
        },
        buttonHover: {
            transform: 'translateY(-1px)',
            boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)'
        },
        buttonDisabled: {
            opacity: '0.6',
            cursor: 'not-allowed'
        },
        loader: {
            width: '20px',
            height: '20px',
            border: '2px solid transparent',
            borderTop: '2px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                {/* Remove create account form, only show verification step */}
                {step === 2 && (
                    <button
                        style={styles.backButton}
                        onClick={() => setStep(1)}
                        type="button"
                    >
                        ←
                    </button>
                )}
                <div style={styles.header}>
                    <h1 style={styles.title}>Verify Your Email</h1>
                    <p style={styles.subtitle}>
                        {`We've sent a 6-digit code to ${formData.email}`}
                    </p>
                </div>
                <div style={styles.form}>
                    <div style={styles.verificationContainer}>
                        {verificationCode.map((digit, index) => (
                            <input
                                key={index}
                                ref={el => inputRefs.current[index] = el}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleVerificationChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                style={styles.verificationInput}
                            />
                        ))}
                    </div>
                    {errors.verification && (
                        <span style={{ ...styles.error, textAlign: 'center' }}>
                            {errors.verification}
                        </span>
                    )}
                    <div style={styles.timer}>
                        {timeLeft > 0 ? (
                            `Resend code in ${timeLeft}s`
                        ) : (
                            <button
                                type="button"
                                onClick={handleResendOtp}
                                style={styles.resendButton}
                                disabled={isLoading}
                            >
                                Resend verification code
                            </button>
                        )}
                    </div>
                    {resentOtp && (
                        <div style={{ color: '#6366f1', textAlign: 'center', marginBottom: 8 }}>
                            New OTP: <b>{resentOtp}</b>
                        </div>
                    )}
                    <button
                        onClick={handleVerificationSubmit}
                        disabled={isLoading}
                        style={{
                            ...styles.button,
                            ...(isLoading ? styles.buttonDisabled : {})
                        }}
                    >
                        {isLoading ? (
                            <div style={styles.loader}></div>
                        ) : (
                            'Verify & Continue'
                        )}
                    </button>
                    <button
                        type="button"
                        style={{
                            ...styles.button,
                            background: '#fff',
                            color: '#4C48B0',
                            border: '1px solid #4C48B0',
                            marginTop: 12
                        }}
                        onClick={() => window.location.href = '/login'}
                    >
                        Home
                    </button>
                </div>
            </div>

            <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default TwoStepSignup;