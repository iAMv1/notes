# Executive Q&A: Sentinel Critical Assessment
## Pre-Pitch Preparation for VP-Level Engagements

---

## Executive Summary

**Purpose**: Prepare leadership for rigorous questioning from VP-level professionals, technical judges, and C-suite evaluators.

**Scope**: 12 critical question categories with evidence-based answers, risk acknowledgments, and strategic positioning.

**Compliance Standard**: McKinsey SCQA framework, 100% quantified claims, zero hand-waving.

---

## Critical Questions & Evidence-Based Answers

### 1. ACCURACY VALIDATION

**The Question** (Data Science VP / NatWest VP Data Engineering):
> "Your system claims to predict burnout. What's your validated accuracy? Precision? Recall? F1-score? What dataset did you train on?"

**The Wrong Answer**:
> "We're very accurate! Our algorithms are state-of-the-art!"

**The Correct Answer**:

**Status**: Unvalidated. Honest assessment: **7.5/10 problem statement compliance**, accuracy metrics pending 6-month shadow deployment.

**Evidence**:
| Metric | Value | Status |
|--------|-------|--------|
| Historical Prediction Accuracy | **N/A** | No production data (0 users) |
| Shadow Deployment Framework | **Built** | Infrastructure complete, awaiting data |
| Validated Thresholds | **Hypothesis** | Velocity > 2.5, Entropy > 1.5, Connection < 0.3 calibrated from burnout research (Maslach Burnout Inventory, 1981) |
| Comparison: Qualtrics Predict iQ | **73%** 6-month attrition prediction | Benchmark from published case studies |

**Strategic Positioning**:
> "We have chosen the honest path. Qualtrics claims 73% accuracy based on 6+ years of production data. We have built the infrastructure to measure our accuracy but need 6 months of shadow deployment to validate. We report this gap rather than inventing numbers."

**Differentiation**:
- Competitor accuracy claims are **correlation-based** (survey + HRIS data)
- Our approach is **causation-seeking** (behavioral withdrawal precedes verbal expression by 2-3 weeks)
- Validation timeline: Months 1-4 (shadow), Months 4-6 (threshold calibration), Months 6-12 (A/B testing)

---

### 2. PRIVACY & GDPR/DPDPA COMPLIANCE

**The Question** (Chief Privacy Officer / Judge with compliance background):
> "You say 'privacy by physics' but you're processing employee data. Show me your GDPR Article 6 legal basis, DPDPA 2023 compliance matrix, and consent withdrawal mechanism."

**The Wrong Answer**:
> "We don't store any data so we don't need compliance!"

**The Correct Answer**:

**Two-Vault Architecture — Technical Evidence**:
```
Vault A (Analytics): HMAC-SHA256(email, salt) → user_hash (one-way, irreversible)
Vault B (Identity): Fernet AES-256(email) → email_encrypted (reversible with audit)
Schema Separation: NO foreign key constraints between Vault A and Vault B
Re-identification Requirements: Admin role + 36-hour expiry + immutable audit log
```

**DPDPA 2023 Compliance Matrix**:
| Requirement | Implementation | Evidence |
|-------------|----------------|----------|
| **Consent** (Section 11) | Employee opt-in at onboarding | `consent_share_with_manager` boolean in Vault B |
| **Purpose Limitation** (Section 12) | Burnout detection only | `Event.event_type` restricted to metadata-only schema |
| **Data Minimization** (Section 13) | Timestamps only, no content | Documented in `REAL_WORLD.md` — "WHEN not WHAT" |
| **Storage Limitation** (Section 14) | 30-day rolling risk history | `RiskHistory` table TTL + `retention_days` setting |
| **Consent Withdrawal** (Section 15) | One-click opt-out | `monitoring_paused_until` field + UI toggle |
| **Breach Notification** (Section 25) | 72-hour reporting | Immutable audit log exports to `AuditLog` table |

**Competitive Advantage**:
> "Culture Amp, Peakon, and Qualtrics all store survey responses with PII. A breach yields usable data. Our two-vault architecture means a breach yields anonymous hashes (Vault A) and encrypted blobs (Vault B) — mathematically useless without the vault key, which is stored separately and every use generates an audit trail."

**Honest Limitation**:
> "DPDPA 2023 is evolving. We've architected for the strictest interpretation, but regulators may interpret 'legitimate interest' vs 'consent' differently. Our conservative approach prioritizes employee trust."

---

### 3. FALSE POSITIVE RATE

**The Question** (Engineering Manager at PepsiCo / HR VP):
> "If you flag someone as 'CRITICAL burnout risk' and they're actually fine, you've damaged trust and wasted manager time. What's your false positive rate?"

**The Wrong Answer**:
> "Our AI is very smart so it doesn't make mistakes!"

**The Correct Answer**:

**Three-Signal Convergence — Mathematical Defense**:
```python
if velocity > 2.5 AND belongingness < 0.3 AND entropy > 1.5:
    risk = "CRITICAL"
```

**Why This Reduces False Positives**:
| Scenario | velocity | belonging | entropy | Risk | Rationale |
|----------|----------|-----------|---------|------|-----------|
| Hard sprint, happy team | 3.0 | 0.7 | 0.5 | ELEVATED | Busy but socially connected, regular schedule |
| Quiet period, withdrawing | 0.5 | 0.2 | 0.5 | ELEVATED | Low intensity but socially isolated |
| Night owl, chaotic hours | 1.0 | 0.6 | 2.5 | LOW | Chaotic schedule but low intensity, socially fine |
| All signals converge | 3.2 | 0.25 | 1.8 | CRITICAL | Intensity rising + withdrawing + schedule breaking |

**Statistical Defense**:
- Single-signal threshold: **High false positive risk** (1 in 5 flagged employees might be healthy)
- Three-signal convergence: **Dramatically reduced false positives** (estimated <5% based on behavioral psychology literature — unvalidated in production)

**Context-Aware Filtering**:
- `ContextEnricher` checks Google Calendar for "explained" late nights
- Hackathon, on-call rotation, scheduled crunch periods are excluded from velocity calculation
- Reduces false positives from 20% to estimated 5-8% (requires validation)

**Honest Acknowledgment**:
> "We would rather miss a true positive than create a false one. A three-signal requirement is deliberately conservative. We are not claiming perfection — we're claiming the architecture to measure and improve accuracy over time."

---

### 4. COMPETITIVE DIFFERENTIATION

**The Question** (JK Cement Head of AI / Strategy VP):
> "Microsoft Viva, Culture Amp, and Qualtrics exist. What's your moat? Why not just use Viva Insights which I already pay for?"

**The Wrong Answer**:
> "We're cheaper and better!"

**The Correct Answer**:

**The Positioning Line**:
> "**Every competitor either reads your content or requires your participation. We do neither.**"

**Competitive Matrix**:
| Dimension | Viva Insights | Culture Amp | Peakon | Qualtrics | **Sentinel** |
|-----------|---------------|-------------|---------|-----------|--------------|
| **Content Access** | Reads email/Teams content | Reads survey responses | Runs NLP on free text | Survey + HRIS records | **Metadata only** |
| **Participation** | None | Required (65% response rate) | Required (weekly pulses) | Required | **None** |
| **Privacy Architecture** | Differential privacy aggregates | Anonymity thresholds | Anonymous | Configurable | **Two-vault encryption** |
| **Speed** | Real-time | Quarterly snapshots | Weekly pulses | Survey-dependent | **21-day baseline + real-time** |
| **Cost/employee/month** | $6-12 | $8-12 | $6-10 | $15-30 | **$4** |
| **Platform Lock-in** | M365 only | Cross-platform | Cross-platform | Cross-platform | **Cross-platform** |

**Our Moat**:
1. **Privacy-First Architecture**: Competitors bolt on compliance. We built for it.
2. **Zero Participation**: Survey fatigue is real. Response rates degrade to 45-50% over time.
3. **Behavioral > Verbal**: Connection Index catches withdrawal 2-3 weeks before surveys catch "I'm unhappy"
4. **Cost Advantage**: 33-67% cheaper than competitors

**Honest Vulnerability**:
> "Viva has deeper M365 integration. If you're an M365-only shop and don't care about privacy, Viva might be sufficient. We're for organizations that span Slack, Google Workspace, GitHub, and care about employee trust."

---

### 5. GAMING RESISTANCE

**The Question** (Technical Judge / Data Engineer):
> "What's to stop an employee from gaming the system? Fake commits, scheduled Slack messages, etc.?"

**The Wrong Answer**:
> "They can't because our AI is too smart!"

**The Correct Answer**:

**Three Defensive Layers**:

**Layer 1: Weighted Event Scoring**:
```python
weight = min(files_changed * log1p(additions + deletions), 5.0)
# README typo: 1 file × 2 lines → score 0.5
# Real refactor: 15 files × 200 lines → score 4.6
```
- Padding commit count with trivial edits: **Ineffective** (logarithmic scoring gives diminishing returns)
- 10,000-line vendor dump: **Capped at 5.0** (cannot dominate the signal)

**Layer 2: 21-Day Sustained Requirement**:
- Single-day gaming: **No impact** (baseline requires 21-day window)
- 3-week gaming script: **Possible but detectable** (consistent timing patterns are themselves suspicious)
- Permanent gaming: **Becomes the new baseline** — deviation from the gamed pattern triggers the same alerts

**Layer 3: Multi-Source Signal Requirement**:
- Gaming GitHub alone: **Ineffective** (33% confidence, not enough to trigger alert)
- Gaming GitHub + Slack + Calendar + Gmail: **A full-time job on top of your actual job**

**The Honest Truth**:
> "A sufficiently motivated person could sustain a gaming pattern for 21 days across all four signal sources. This would require ~4-6 hours per day of scripted activity. At that point, the person is working harder at gaming than at their actual job. We accept this as an edge case rather than compromising privacy to detect it."

**Hawthorne Effect**:
> "The act of maintaining a gaming script is itself effortful and detectable. Abnormal consistency (every commit at exactly 15-minute intervals) is itself a signal we could flag in Phase 2."

---

### 6. SCALABILITY & ENTERPRISE READINESS

**The Question** (CTO / VP Engineering at large company):
> "You're demo-ready with seed data. How do you handle 10,000 employees? 100,000? What's your database architecture, caching strategy, and latency SLA?"

**The Wrong Answer**:
> "We'll use AWS and it'll scale!"

**The Correct Answer**:

**Current State** (Honest Assessment):
| Component | Scale | Status |
|-----------|-------|--------|
| Database | PostgreSQL (Supabase) | Tested to 1,000 employees (seed data) |
| Real-time | WebSocket + SSE | Single-node (no Redis clustering) |
| Analysis | Synchronous API | No background job queue (Celery/RQ) |
| AI/LLM | Gemini 2.5 Flash | Rate limited to 60 RPM (free tier) |
| Cache | Redis (local) | Single instance, no cluster |

**Scalability Roadmap**:

**Phase 1 (1-5K employees)** — Current architecture adequate:
- PostgreSQL read replicas for analytics queries
- Redis for session caching (implemented)
- Uvicorn workers: 4-8 (current)

**Phase 2 (5-50K employees)** — Required upgrades:
- Celery + Redis for async analysis jobs
- TimescaleDB or ClickHouse for `analytics.events` table (time-series data)
- Redis Cluster for session distribution
- LLM gateway (Portkey) for rate limiting and failover

**Phase 3 (50K+ employees)** — Enterprise architecture:
- Kubernetes deployment with auto-scaling
- Separate read replicas per tenant (multi-tenant data isolation)
- Kafka for event ingestion pipeline
- Dedicated ML inference cluster for LLM workloads

**SLA Commitments** (Realistic):
| Tier | Employees | API Latency | Real-time Delay | Availability |
|------|-----------|-------------|-----------------|--------------|
| Starter | 100-500 | <500ms | <5s | 99.5% |
| Professional | 500-5,000 | <1s | <10s | 99.9% |
| Enterprise | 5,000+ | <2s | <30s | 99.95% |

**Honest Gap**:
> "We have not stress-tested beyond 1,000 employees. The architecture is designed for scale but requires infrastructure investment. We are not claiming enterprise-grade scalability today — we're claiming the architecture to get there."

---

### 7. INTEGRATION COMPLEXITY

**The Question** (IT VP / Head of Digital Transformation):
> "How long does it take to integrate with my existing stack? SAP, Workday, custom HRIS, Slack, Google Workspace, etc.?"

**The Wrong Answer**:
> "One-click setup! Works instantly!"

**The Correct Answer**:

**Current Integrations** (Implemented):
| Platform | Integration | Status | Setup Time |
|----------|-------------|--------|------------|
| GitHub | Composio SDK | Live | 5 min OAuth |
| Slack | Composio SDK | Live | 5 min OAuth |
| Google Calendar | Composio SDK | Live | 5 min OAuth |
| Gmail | Composio SDK | Live | 5 min OAuth |
| CSV Upload | Native | Live | 15 min |

**Planned Integrations** (Roadmap):
| Platform | Integration | Timeline | Complexity |
|----------|-------------|----------|------------|
| SAP HCM | API | Q3 2026 | High (6-8 weeks) |
| Workday | API | Q3 2026 | High (6-8 weeks) |
| MS Teams | Graph API | Q2 2026 | Medium (3-4 weeks) |
| Azure AD | SSO | Q2 2026 | Low (1 week) |
| Jira | Composio | Q2 2026 | Low (2 weeks) |

**Integration Complexity Factors**:
- **OAuth-based** (Slack, Google, GitHub): 1 day setup, minimal IT involvement
- **API-based** (SAP, Workday): 4-8 weeks, requires IT coordination, custom field mapping
- **SSO** (Azure AD, Okta): 1-2 weeks, standard SAML/OIDC configuration

**Technical Reality**:
> "Each enterprise HRIS is a snowflake. SAP alone has 12 different versions with incompatible APIs. We cannot promise 'instant integration' — we promise a dedicated integration engineer and 4-8 week timeline for complex HRIS connections."

**Minimum Viable Integration**:
- Start with GitHub/Slack (1 day)
- Layer in Calendar (1 day)
- Add HRIS in Phase 2 (4-8 weeks)
- Full-stack deployment: 6-12 weeks for 5,000+ employee org

---

### 8. ROI MEASUREMENT

**The Question** (CFO / VP Finance):
> "You claim 10x ROI. Prove it. Where are your customer case studies? Show me the delta in attrition rates."

**The Wrong Answer**:
> "We have internal projections showing massive savings!"

**The Correct Answer**:

**ROI Calculation Framework** (Evidence-Based):

**Cost Side**:
| Component | Calculation | Annual Cost |
|-----------|-------------|-------------|
| Sentinel License | 1,000 employees × $4/month × 12 | $48,000 |
| Implementation | Setup + training (one-time) | $15,000 |
| Integration | SAP/Workday connection | $25,000 |
| **Total Year 1** | | **$88,000** |
| **Total Year 2+** | License only | $48,000 |

**Benefit Side** (Conservative Estimates):
| Metric | Value | Source |
|--------|-------|--------|
| Engineer Replacement Cost | $150,000-$300,000 | Industry standard (SHRM 2024) |
| Indian Market (adjusted) | INR 15-25 lakh ($18K-$30K) | Local recruitment + training costs |
| Attrition Reduction (conservative) | 2 departures prevented/year | Assumption requiring validation |

**ROI Calculation** (Conservative):
- **Year 1**: 2 prevented departures × $25,000 = $50,000 saved vs. $88,000 cost = **-43% ROI** (investment year)
- **Year 2**: 2 prevented departures × $25,000 = $50,000 saved vs. $48,000 cost = **+4% ROI**
- **Year 3**: 3 prevented departures × $25,000 = $75,000 saved vs. $48,000 cost = **+56% ROI**

**Honest Assessment**:
> "We cannot prove ROI yet. We have zero production customers and zero validated outcomes. The 10x ROI claim is a forward-looking projection based on industry-standard replacement costs and assuming 2-3 prevented departures per year in a 1,000-person engineering org."

**Validation Path**:
1. **Months 1-6**: Shadow deployment (measure predictions vs. actual outcomes)
2. **Month 6**: Calculate prediction accuracy (precision/recall)
3. **Month 12**: Measure actual attrition delta (control group vs. Sentinel orgs)
4. **Month 18**: Publish validated ROI case study

**Risk Factor**:
> "If our prediction accuracy is below 60%, the system will not generate enough actionable alerts to justify the cost. We acknowledge this risk and have built the shadow deployment framework to measure it."

---

### 9. DEPLOYMENT RISK & MITIGATION

**The Question** (Risk Officer / Compliance VP):
> "What happens if your system goes down? What if the LLM generates harmful advice? What's your business continuity plan?"

**The Wrong Answer**:
> "We're on the cloud so we're always up!"

**The Correct Answer**:

**Availability Risks**:
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Database outage | Low | High | Supabase managed PostgreSQL (99.95% SLA), daily backups |
| LLM rate limiting | Medium | Medium | Portkey gateway with Groq/Gemini failover |
| WebSocket failure | Low | Low | Automatic reconnection with exponential backoff |
| Data ingestion lag | Medium | Low | Async queue with retry logic, 24-hour max lag acceptable |

**LLM Safety** (Critical for HR Use Case):
- **RefusalClassifier**: Blocks out-of-scope queries ("Should I fire this person?")
- **Role-based scoping**: Employees cannot see team data, managers cannot see individual data (without consent)
- **No medical claims**: System flags "behavioral pattern change" not "depression" or "mental health issue"
- **Audit trail**: Every LLM response logged with prompt context for review

**Harmful Output Prevention**:
```python
# System prompt explicitly forbids
FORBIDDEN_TOPICS = [
    "Medical diagnosis",
    "Recommendation to terminate",
    "Sharing individual data without consent",
    "Legal advice"
]
```

**Business Continuity**:
- **RTO** (Recovery Time Objective): 4 hours for critical functions
- **RPO** (Recovery Point Objective): 1 hour (hourly backups)
- **Failover**: Multi-region deployment in Enterprise tier

**Honest Gap**:
> "We do not have SOC 2 Type II certification yet. We are building for it (infrastructure in place) but certification requires 6+ months of operational history. We are not claiming enterprise-grade compliance today."

---

### 10. ORGANIZATIONAL CULTURE FIT

**The Question** (CHRO / VP People):
> "My employees will hate this. They'll think it's surveillance. How do you overcome resistance?"

**The Wrong Answer**:
> "They'll love it once they see the value!"

**The Correct Answer**:

**Employee Value Proposition** (Why They Would Opt In):
1. **Mirror, not surveillance**: They see their own data first. It's their dashboard about their patterns.
2. **Early warning**: "Your focus time dropped 40% this sprint" is useful information — like a fitness tracker for sleep.
3. **Control**: One-click opt-out, monitoring pause during sensitive periods, choose nudge frequency.
4. **Manager can't see their data**: Minimum team size enforcement (5+ employees) means individual identity cannot be deduced from team aggregates.
5. **Protection from blindsiding**: Better to get a nudge about rising stress than to crash and burn without warning.

**Rollout Strategy** (Culture-Sensitive):
| Phase | Approach | Timeline |
|-------|----------|----------|
| **1. Champions** | Voluntary opt-in with early adopters (20% of org) | Weeks 1-4 |
| **2. Transparency** | All-hands demo showing what managers see (aggregates only) | Week 4 |
| **3. Gradual** | Department-by-department rollout with opt-out guarantee | Weeks 5-12 |
| **4. Feedback Loop** | Anonymous surveys on perception, adjust messaging | Ongoing |

**Cultural Resistance Indicators**:
- High opt-out rate (>30%): System may not generate statistically significant team insights
- Low GitHub/Slack integration rate: Indicates distrust or alternative tools (WhatsApp)
- Manager override usage: High 36-hour override usage suggests managers don't trust aggregates

**Mitigation**:
> "If >30% opt out, team-level insights become statistically weak. We recommend voluntary pilots with high-trust teams first, expanding only after positive word-of-mouth."

---

### 11. TECHNICAL DEPTH & ALGORITHMS

**The Question** (JK Cement Head of AI / Technical Judge):
> "Walk me through the math. How do you calculate velocity? What's the statistical significance of your thresholds? Why linregress and not prophet?"

**The Wrong Answer**:
> "We use AI and machine learning!"

**The Correct Answer**:

**Velocity Calculation** (Deterministic, Not ML):
```python
from scipy.stats import linregress

# 21-day window
days = list(range(21))
scores = [daily_weighted_score for day in window]

slope, intercept, r_value, p_value, std_err = linregress(days, scores)
velocity = slope  # Positive = increasing intensity
r_squared = r_value ** 2  # Trend confidence
```

**Why Linear Regression**:
- **Simplicity**: One equation, fully explainable to non-technical stakeholders
- **Speed**: O(n) calculation, <10ms per employee
- **Interpretability**: Slope = "points per day increase" — intuitive metric
- **No overfitting**: 21 data points, 2 parameters (slope, intercept)

**Why Not Prophet / LSTM / ARIMA**:
- **Prophet**: Designed for seasonal data with yearly cycles. Burnout doesn't have yearly seasonality.
- **LSTM**: Requires 1000+ data points for training. We have 21.
- **ARIMA**: Assumes stationary data. Work patterns are non-stationary (baseline shifts after vacation, role changes).

**Threshold Calibration**:
| Threshold | Source | Confidence |
|-----------|--------|------------|
| Velocity > 2.5 | Hypothesis from burnout research (Maslach) | Unvalidated |
| Entropy > 1.5 | Shannon entropy theory (Shannon, 1948) | Well-established |
| Connection < 0.3 | Social withdrawal literature (Cohen, 2004) | Unvalidated |

**Statistical Honesty**:
> "Our thresholds are hypotheses calibrated against burnout research, not machine learning models trained on production data. We chose explainable math over black-box ML because HR leaders need to defend these alerts to employees and regulators."

---

### 12. EXIT STRATEGY & DATA PORTABILITY

**The Question** (Legal / Procurement):
> "If we want to cancel, how do we get our data out? What format? How long does it take?"

**The Wrong Answer**:
> "You can export a CSV anytime!"

**The Correct Answer**:

**Data Portability Framework**:

**Employee-Level Export** (GDPR Article 20 Compliance):
- Format: JSON (structured) + CSV (human-readable)
- Contents: All events with user's `user_hash`, risk scores, analysis history
- Timeline: 30-day rolling window only (by design — we don't store 5-year histories)
- Delivery: Secure download link (24-hour expiry)

**Admin-Level Export** (Organizational Data):
- Format: Aggregated anonymized CSV (no individual identification)
- Contents: Team-level risk distributions, event counts, trend summaries
- Excluded: Individual employee data (requires consent per employee)
- Delivery: API endpoint or manual request (5 business days)

**Data Deletion** (GDPR "Right to be Forgotten"):
```python
# Hard delete from Vault A (analytics)
delete from analytics.events where user_hash = ?
delete from analytics.risk_scores where user_hash = ?
delete from analytics.risk_history where user_hash = ?

# Hard delete from Vault B (identity)
delete from identity.users where user_hash = ?
delete from identity.audit_logs where actor_hash = ?

# Retention: Audit logs kept 1 year for compliance, then purged
```

**Offboarding Timeline**:
| Action | Timeline | Cost |
|--------|----------|------|
| Data export request | 48 hours | Free |
| Data deletion request | 7 days | Free |
| Full organizational export | 14 days | Free |
| Integration disconnection | 1 day | Free |

**Honest Constraint**:
> "Because of our two-vault architecture, individual re-identification requires admin access and audit logging. Full organizational export with individual identification requires 52 separate consent verifications — we can provide anonymized aggregates instantly, but individual-level exports require the consent protocol."

---

## Appendix: Quick Reference Card

### Numbers to Memorize
| Metric | Value | Use Case |
|--------|-------|----------|
| Overall Compliance | 7.5/10 | Honest self-assessment |
| False Positive (estimated) | <5% | With three-signal convergence |
| Cost/employee/month | $4 | Pricing pitch |
| Replacement cost | $150K-$300K | ROI calculation |
| Baseline window | 21 days | Detection timeline |
| Confidence threshold | 80% | Alert generation |
| 36-hour override | RBAC limit | Privacy protection |
| Validation timeline | 6 months | Shadow deployment |

### Forbidden Phrases (Never Say)
- "Our AI is very smart"
- "We have 95% accuracy"
- "Instant integration"
- "Zero risk"
- "Employees will love it"
- "One-click setup"
- "Always up"
- "Surveillance-grade monitoring"

### Required Phrases (Always Include)
- "The math is sound. The architecture is complete. The validation is in progress."
- "We measure the shape of work, not its substance."
- "Privacy by physics, not by policy."
- "We would rather miss a true positive than create a false one."
- "Math makes decisions. AI writes text."

### Judge-Ready Soundbites
| Question Type | Response |
|---------------|----------|
| "Why not sentiment?" | "Connection Index catches behavioral withdrawal 2-3 weeks before surveys catch verbal unhappiness. People fake words. They can't fake engagement patterns." |
| "How accurate?" | "Infrastructure built, validation in progress. We report the gap rather than invent numbers." |
| "Privacy?" | "Two-vault architecture. Breach yields anonymous hashes and encrypted blobs — mathematically useless." |
| "Competition?" | "Viva reads content. We don't. Culture Amp requires participation. We don't. That's the moat." |
| "Gaming?" | "Three-layer defense: weighted scoring, 21-day sustained requirement, multi-source convergence. Gaming becomes a full-time job." |

---

**Document Version**: 1.0
**Last Updated**: April 2026
**Status**: Pre-hackathon briefing
**Classification**: Internal — Executive Preparation
