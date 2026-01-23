import { ArrowRight, Check, Clock, ShoppingBag, MessageCircle, Bell, Star, Zap } from 'lucide-react'

// Custom themed icons
const AssignmentDoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
    </svg>
)

const OrderReadyIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <path d="M6 2v2" />
        <path d="M10 2v2" />
        <path d="M14 2v2" />
    </svg>
)

const AITutorIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2" />
        <path d="M12 21v2" />
        <path d="M4.22 4.22l1.42 1.42" />
        <path d="M18.36 18.36l1.42 1.42" />
        <path d="M1 12h2" />
        <path d="M21 12h2" />
        <path d="M4.22 19.78l1.42-1.42" />
        <path d="M18.36 5.64l1.42-1.42" />
    </svg>
)

const PhoneShowcase = () => {
    return (
        <section className="phone-showcase" id="showcase">
            {/* Background glow effects */}
            <div className="showcase-glow showcase-glow-1"></div>
            <div className="showcase-glow showcase-glow-2"></div>

            <div className="phone-showcase-container">
                {/* Left Content */}
                <div className="phone-showcase-content">
                    <div className="showcase-badge">
                        <Zap size={14} />
                        <span>Best Student App 2024</span>
                    </div>

                    <h2 className="showcase-title">
                        Manage Your <span className="text-gradient">Campus Life</span> Anytime, Anywhere.
                    </h2>

                    <p className="showcase-subtitle">
                        From getting assignments done on time to skipping canteen queues,
                        CollegePaglu is your ultimate campus companion designed by students, for students.
                    </p>

                    <div className="showcase-features">
                        <div className="showcase-feature">
                            <div className="showcase-feature-icon">
                                <Check size={16} />
                            </div>
                            <span>AI-Powered Assignment Help</span>
                        </div>
                        <div className="showcase-feature">
                            <div className="showcase-feature-icon">
                                <Check size={16} />
                            </div>
                            <span>LazyPeeps Food Ordering</span>
                        </div>
                        <div className="showcase-feature">
                            <div className="showcase-feature-icon">
                                <Check size={16} />
                            </div>
                            <span>CampusMart Buy/Sell</span>
                        </div>
                    </div>

                    <div className="showcase-buttons">
                        <button className="btn-primary-3d">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            App Store
                        </button>
                        <button className="btn-primary-3d">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.4 0 .78.16 1.06.44l12.88 8.5c.56.37.56 1.18 0 1.56l-12.88 8.5c-.28.28-.66.44-1.06.44-.83 0-1.5-.67-1.5-1.5z" />
                            </svg>
                            Google Play
                        </button>
                    </div>
                </div>

                {/* Phone Mockups with 3D effects */}
                <div className="phone-showcase-phones">
                    {/* 3D Floating Cards */}
                    <div className="floating-3d top-left">
                        <div className="floating-3d-icon green">
                            <AITutorIcon />
                        </div>
                        <div className="floating-3d-content">
                            <span className="floating-3d-title">Smart Study Active</span>
                            <span className="floating-3d-sub">Helping with DS Lab</span>
                        </div>
                    </div>

                    <div className="floating-3d top-right">
                        <div className="floating-3d-icon mint">
                            <AssignmentDoneIcon />
                        </div>
                        <div className="floating-3d-content">
                            <span className="floating-3d-title">Assignment Submitted!</span>
                            <span className="floating-3d-sub">2 hours before deadline</span>
                        </div>
                    </div>

                    <div className="floating-3d bottom-left">
                        <div className="floating-3d-stats">
                            <span className="stats-number">50K+</span>
                            <span className="stats-label">Active Students</span>
                        </div>
                    </div>

                    <div className="floating-3d bottom-right">
                        <div className="floating-3d-icon orange">
                            <OrderReadyIcon />
                        </div>
                        <div className="floating-3d-content">
                            <span className="floating-3d-title">Order Ready!</span>
                            <span className="floating-3d-sub">Counter 3 • Masala Dosa</span>
                        </div>
                    </div>

                    {/* Main Phone */}
                    <div className="phone-3d main">
                        <div className="phone-3d-frame">
                            <div className="phone-3d-notch"></div>
                            <div className="phone-3d-screen">
                                {/* Status Bar */}
                                <div className="phone-status-bar">
                                    <span>9:41</span>
                                    <div className="status-icons">
                                        <span>📶</span>
                                        <span>🔋</span>
                                    </div>
                                </div>

                                {/* App Header */}
                                <div className="phone-app-header">
                                    <div className="app-greeting">
                                        <span className="greeting-text">Good morning,</span>
                                        <span className="greeting-name">Arjun! 👋</span>
                                    </div>
                                    <div className="app-avatar">
                                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face" alt="User" />
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="phone-quick-actions">
                                    <div className="quick-action">
                                        <div className="quick-action-icon green">
                                            <AITutorIcon />
                                        </div>
                                        <span>Smart Study</span>
                                    </div>
                                    <div className="quick-action">
                                        <div className="quick-action-icon orange">
                                            <OrderReadyIcon />
                                        </div>
                                        <span>LazyPeeps</span>
                                    </div>
                                    <div className="quick-action">
                                        <div className="quick-action-icon sage">
                                            <ShoppingBag size={18} />
                                        </div>
                                        <span>Mart</span>
                                    </div>
                                    <div className="quick-action">
                                        <div className="quick-action-icon lavender">
                                            <MessageCircle size={18} />
                                        </div>
                                        <span>Chat</span>
                                    </div>
                                </div>

                                {/* Active Tasks */}
                                <div className="phone-section-title">
                                    <span>Due Today</span>
                                    <ArrowRight size={14} />
                                </div>

                                <div className="phone-task-card urgent">
                                    <div className="task-left">
                                        <div className="task-icon">
                                            <AssignmentDoneIcon />
                                        </div>
                                        <div className="task-info">
                                            <span className="task-title">Data Structures Lab</span>
                                            <span className="task-meta">
                                                <Clock size={10} />
                                                Due in 4 hours
                                            </span>
                                        </div>
                                    </div>
                                    <div className="task-badge urgent">Urgent</div>
                                </div>

                                <div className="phone-task-card">
                                    <div className="task-left">
                                        <div className="task-icon">
                                            <Bell size={16} />
                                        </div>
                                        <div className="task-info">
                                            <span className="task-title">New Campus Event</span>
                                            <span className="task-meta">
                                                <Star size={10} />
                                                Tech Fest Registration
                                            </span>
                                        </div>
                                    </div>
                                    <div className="task-badge new">New</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left Phone */}
                    <div className="phone-3d left">
                        <div className="phone-3d-frame">
                            <div className="phone-3d-notch"></div>
                            <div className="phone-3d-screen">
                                <div className="phone-status-bar">
                                    <span>9:41</span>
                                </div>
                                <div className="mini-screen-title">LazyPeeps</div>
                                <div className="mini-order-card">
                                    <span className="order-status">🍕 Order Ready</span>
                                    <span className="order-detail">Counter 3</span>
                                </div>
                                <div className="mini-order-card">
                                    <span className="order-status">☕ Preparing</span>
                                    <span className="order-detail">5 min left</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Phone */}
                    <div className="phone-3d right">
                        <div className="phone-3d-frame">
                            <div className="phone-3d-notch"></div>
                            <div className="phone-3d-screen">
                                <div className="phone-status-bar">
                                    <span>9:41</span>
                                </div>
                                <div className="mini-screen-title">CampusMart</div>
                                <div className="mini-product-grid">
                                    <div className="mini-product">📚</div>
                                    <div className="mini-product">💻</div>
                                    <div className="mini-product">🎧</div>
                                    <div className="mini-product">📱</div>
                                </div>
                                <div className="mini-tag">12 new listings</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PhoneShowcase
