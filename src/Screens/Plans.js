import React from 'react'
import "./Plans.css"

function Plans() {
    return (
    <div className="plans">
        <section className="pricing-plan">
            <div className="pricing-plan_header">
                <h1 className="pricing_title">Individual</h1>
                <h2 className="pricing-plan_summary">One-time plans from ₹129. Auto-renew plans temporarily unavailable.</h2>
            </div>
            <div className="description">
                <ul className="list">
                    <li className="feature">Listen to music ad-free</li>
                    <li className="feature">Group Session</li>
                    <li className="feature">Download 10k songs on 5 devices</li>
                </ul>
            </div>
            <div className="actions">
                <p className="cost">₹129</p>
                <p className="text">per month</p>
                <a href="./" className="button">Purchase</a>
            </div>
        </section>
        <section className="pricing-plan">
            <div className="pricing-plan_header">
                <h1 className="pricing_title">Duo</h1>
                <h2 className="pricing-plan_summary">One-time plans from ₹165. Auto-renew plans temporarily unavailable.</h2>
            </div>
            <div className="description">
                <ul className="list">
                    <li className="feature">For couples who live together</li>
                    <li className="feature">Listen to music ad-free</li>
                    <li className="feature">Group Session</li>
                </ul>
            </div>
            <div className="actions">
                <p className="cost">₹165</p>
                <p className="text">per month</p>
                <a href="./" className="button">Purchase</a>
            </div>
        </section>
        <section className="pricing-plan">
            <div className="pricing-plan_header">
                <h1 className="pricing_title">Family</h1>
                <h2 className="pricing-plan_summary">One-time plans from ₹199. Auto-renew plans temporarily unavailable.</h2>
            </div>
            <div className="description">
                <ul className="list">
                    <li className="feature">For family who live together</li>
                    <li className="feature">Block explicit music</li>
                    <li className="feature">Listen to music ad-free</li>
                </ul>
            </div>
            <div className="actions">
                <p className="cost">₹199</p>
                <p className="text">per month</p>
                <a href="./" className="button">Purchase</a>
            </div>
        </section>
    </div>
    )
}

export default Plans
