"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {

        setName("");
        setEmail("");
        setPassword("");
        router.push("/login");
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .signup-page {
          min-height: calc(100vh - 64px - 49px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #d0d5dd;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0,0,0,0.05) 0%, transparent 50%);
          font-family: 'Inter', sans-serif;
          padding: 20px;
        }

        .signup-card {
          width: 100%;
          max-width: 440px;
          background: #f0f2f5;
          border-radius: 16px;
          padding: 40px 36px;
          box-shadow:
            0 2px 4px rgba(0,0,0,0.08),
            0 8px 24px rgba(0,0,0,0.12),
            inset 0 1px 0 rgba(255,255,255,0.8);
          animation: cardEnter 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .signup-title {
          font-size: 26px;
          font-weight: 700;
          text-align: center;
          color: #1a1a2e;
          margin-bottom: 6px;
          letter-spacing: -0.3px;
        }

        .signup-subtitle {
          text-align: center;
          color: #6b7280;
          font-size: 14px;
          margin-bottom: 32px;
        }

        .field-group {
          margin-bottom: 20px;
        }

        .field-label {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: #374151;
          margin-bottom: 7px;
          transition: color 0.2s;
        }

        .field-label.focused {
          color: #3b9fd8;
        }

        .field-wrapper {
          position: relative;
        }

        .field-input {
          width: 100%;
          background: #ffffff;
          border: 1.5px solid #e0e3e8;
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          color: #1a1a2e;
          outline: none;
          transition:
            border-color 0.2s,
            box-shadow 0.2s,
            transform 0.15s;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.06);
        }

        .field-input:hover {
          border-color: #c5c9d1;
        }

        .field-input:focus {
          border-color: #3b9fd8;
          box-shadow:
            inset 0 1px 3px rgba(0,0,0,0.04),
            0 0 0 3px rgba(59, 159, 216, 0.15);
          transform: translateY(-1px);
        }

        .field-input::placeholder {
          color: #b0b6c0;
        }

        .focus-bar {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: calc(100% - 4px);
          height: 2px;
          background: linear-gradient(90deg, #3b9fd8, #5bc8f5);
          border-radius: 0 0 8px 8px;
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
          transform-origin: center;
        }

        .field-input:focus ~ .focus-bar {
          transform: translateX(-50%) scaleX(1);
        }

        .submit-btn {
          width: 100%;
          padding: 13px;
          background: linear-gradient(135deg, #3b9fd8 0%, #2980b9 100%);
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          margin-top: 8px;
          transition:
            background 0.2s,
            box-shadow 0.2s,
            transform 0.15s;
          box-shadow: 0 2px 8px rgba(59, 159, 216, 0.35);
          letter-spacing: 0.2px;
        }

        .submit-btn:hover {
          background: linear-gradient(135deg, #2e8ec4 0%, #1e6fa0 100%);
          box-shadow: 0 4px 14px rgba(59, 159, 216, 0.45);
          transform: translateY(-1px);
        }

        .submit-btn:active {
          transform: translateY(0px) scale(0.985);
          box-shadow: 0 1px 4px rgba(59, 159, 216, 0.3);
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 24px 0 18px;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: #e0e3e8;
        }

        .divider-text {
          font-size: 12px;
          color: #9ca3af;
          font-weight: 500;
        }

        .bottom-text {
          text-align: center;
          font-size: 13.5px;
          color: #6b7280;
        }

        .bottom-link {
          color: #3b9fd8;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.15s;
        }

        .bottom-link:hover {
          color: #2980b9;
          text-decoration: underline;
        }

        .terms-text {
          text-align: center;
          font-size: 12px;
          color: #9ca3af;
          margin-top: 18px;
        }

        .terms-link {
          color: #6b7280;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>

      <div className="signup-page">
        <div className="signup-card">
          <h1 className="signup-title">Create New Account</h1>
          <p className="signup-subtitle">Create your account to continue</p>

          <form onSubmit={handleSubmit}>
            <div className="field-group">
              <label className={`field-label${focusedField === "name" ? " focused" : ""}`}>
                Username
              </label>
              <div className="field-wrapper">
                <input
                  type="text"
                  placeholder="Enter username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="field-input"
                  required
                />
                <span className="focus-bar" />
              </div>
            </div>

            <div className="field-group">
              <label className={`field-label${focusedField === "email" ? " focused" : ""}`}>
                Email
              </label>
              <div className="field-wrapper">
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="field-input"
                  required
                />
                <span className="focus-bar" />
              </div>
            </div>

            <div className="field-group">
              <label className={`field-label${focusedField === "password" ? " focused" : ""}`}>
                Password
              </label>
              <div className="field-wrapper">
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  className="field-input"
                  required
                />
                <span className="focus-bar" />
              </div>
            </div>

            {error && (
              <div style={{
                background: "#fef2f2",
                border: "1.5px solid #fca5a5",
                borderRadius: "8px",
                padding: "12px 14px",
                fontSize: "13.5px",
                color: "#dc2626",
                fontWeight: "500",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                ⚠ {error}
              </div>
            )}

            <button type="submit" className="submit-btn">
              Create Account
            </button>
          </form>

          <div className="divider">
            <span className="divider-line" />
            <span className="divider-text">or</span>
            <span className="divider-line" />
          </div>

          <p className="bottom-text">
            Already have an account?{" "}
            <Link href="/login" className="bottom-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}