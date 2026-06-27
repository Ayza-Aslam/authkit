"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [user, setUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
      }

     const response = await fetch("https://authkit-production-cd31.up.railway.app/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
      } else {
        localStorage.removeItem("token");
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
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

        .profile-page {
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

        .profile-card {
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

        .profile-top {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 32px;
        }

        .profile-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b9fd8, #2980b9);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          box-shadow: 0 4px 14px rgba(59, 159, 216, 0.4);
        }

        .profile-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a2e;
          letter-spacing: -0.3px;
          margin-bottom: 4px;
        }

        .profile-subtitle {
          font-size: 13.5px;
          color: #6b7280;
        }

        .profile-fields {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .field-label {
          font-size: 12px;
          font-weight: 600;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .field-value {
          background: #ffffff;
          border: 1.5px solid #e0e3e8;
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 14px;
          font-weight: 500;
          color: #1a1a2e;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.04);
        }

        .logout-btn {
          width: 100%;
          padding: 13px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
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
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.35);
          letter-spacing: 0.2px;
        }

        .logout-btn:hover {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          box-shadow: 0 4px 14px rgba(239, 68, 68, 0.45);
          transform: translateY(-1px);
        }

        .logout-btn:active {
          transform: translateY(0px) scale(0.985);
          box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
        }

        .loading-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          padding: 20px 0;
        }

        .loading-spinner {
          width: 36px;
          height: 36px;
          border: 3px solid #e0e3e8;
          border-top-color: #3b9fd8;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .loading-text {
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }

        .divider {
          height: 1px;
          background: #e0e3e8;
          margin: 4px 0 20px;
        }
      `}</style>

      <div className="profile-page">
        <div className="profile-card">

          <div className="profile-top">
            <div className="profile-avatar">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <h1 className="profile-title">Welcome</h1>
            <p className="profile-subtitle">Your Profile Information</p>
          </div>

          <div className="divider" />

          {user ? (
            <div className="profile-fields">
              <div className="field-group">
                <label className="field-label">Name</label>
                <div className="field-value">{user.name}</div>
              </div>

              <div className="field-group">
                <label className="field-label">Email</label>
                <div className="field-value">{user.email}</div>
              </div>

              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </div>
          ) : (
            <div className="loading-wrap">
              <div className="loading-spinner" />
              <p className="loading-text">Loading your profile...</p>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
