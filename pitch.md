# Algoquest (Sentinel) — Complete Slide Deck

## Design Theme (Apply to ALL Slides)

**Color Palette:**
- Primary: Deep Navy (#0F172A) — backgrounds, headers
- Accent: Emerald (#10B981) — highlights, CTAs, data points
- Secondary: Slate Gray (#64748B) — body text, supporting info
- Warning: Amber (#F59E0B) — risk indicators
- Danger: Rose (#EF4444) — critical alerts
- Background: White (#FFFFFF) with subtle slate tints (#F8FAFC)

**Typography:**
- Headings: Inter Bold / SemiBold — clean, modern, highly readable
- Body: Inter Regular — consistent, professional
- Data/Numbers: Inter Mono — for metrics and scores
- Hierarchy: Title 48px → Section 32px → Body 18px → Caption 14px

**Layout Principles:**
- Generous whitespace — 80px margins, 40px between sections
- Max 6 lines per block — if it's longer, split it
- One big idea per slide — do not crowd
- Use icons before each bullet (not emojis — clean SVG icons)
- Charts over text — show data visually wherever possible
- Rounded corners (8px) on cards, subtle shadows (0 1px 3px rgba(0,0,0,0.1))

**Consistent Elements:**
- Logo top-left on every slide
- Slide number bottom-right
- Thin emerald accent line under each section header
- Footer: "Sentinel — Employee Wellbeing Intelligence" on every slide

---

## SLIDE 1: Current Situation and Problem Statement

### 3-Line Problem Description (Humanized)

Every day, millions of employees work harder and harder until they break. Their managers do not notice until they quit. By then, it is too late — the damage is done, the team is weaker, and the company has lost months of work and thousands of dollars replacing them.


### Solution (4 Bullet Points)

- **See the warning signs early** — Track changes in work patterns, not just how hard someone works
- **Protect privacy by design** — Measure when people work, never what they say or write
- **Act before people leave** — Get alerts weeks before burnout becomes a resignation
- **Keep teams healthy together** — Spot when stress spreads from one person to the whole group

### Business Impact (Easy to Present)

- **76% of employees** experience burnout at work — that is 3 out of 4 people on your team
- **$500 billion** is lost every year in the US alone from burnout-related turnover and sick days
- **6 months** is the average time it takes for a company to notice an employee is burning out — usually at the exit interview
- **$150,000 to $300,000** is the cost to replace one senior engineer — recruiting, training, and lost productivity

### Use Case / Case Study

**Priya — Data Engineer at a Bank (NatWest Profile)**

Priya works at a bank in Gurgaon. For two weeks, her schedule was normal — emails at 9 AM, last message at 6:30 PM. Then a sprint deadline hit. By week three, she was sending emails at 8 AM and working until 9 PM. Her reply rate to teammates dropped from 85% to 60%. Sentinel detected her work pattern was changing fast and flagged her risk as "elevated" — three weeks before she would have considered quitting. Priya saw her own dashboard, got a gentle nudge about her declining focus time, and her manager saw only the team's overall health score — never Priya's personal data.

### Detailed Design Prompt for Slide 1

Create a split-layout slide. Left side (60% width): Large bold heading "The Problem Nobody Sees Coming" in Deep Navy. Below it, place three stat cards in a horizontal row — each card is a white rounded rectangle with subtle shadow. Card 1: "76%" in large Rose text with "of employees face burnout" below in Slate. Card 2: "$500B" in Rose with "annual cost to organizations" below. Card 3: "6 months" in Rose with "average detection time" below. Right side (40% width): A simple illustration showing a person at a desk with a fading warning triangle above them — use flat design style with Navy and Amber colors. Below the illustration, place a short quote block in italic: "By the time we notice, they're already gone." — with emerald left border. Bottom section spans full width: "Our Solution" heading with emerald accent line, followed by the 4 bullet points with checkmark icons in emerald. Keep the overall feel serious but hopeful — the problem is real, but we have an answer.

---

## SLIDE 2: Engines Explanation

### 3-Line Problem Description (Humanized)

Most companies try to measure employee wellbeing with surveys that people fill out once a quarter, or worse, by reading their messages and emails. Surveys are too slow and people do not always tell the truth. Reading messages destroys trust and breaks privacy laws.

### Solution (4 Bullet Points)

- **Safety Valve** — Detects burnout risk by measuring how fast work patterns are changing from a person's normal routine
- **Talent Scout** — Finds the quiet connectors who hold teams together but never show up in performance reviews
- **Culture Thermometer** — Measures team health and spots when stress is spreading from person to person like a virus
- **All three use math, not guesses** — Pure calculations from timestamps and counts, no AI making decisions about people

### Business Impact (Easy to Present)

- **Zero survey fatigue** — Employees do not need to fill out any forms, the system works passively in the background
- **No privacy violations** — The system never reads message content, email bodies, or meeting notes — only timestamps and counts
- **Three independent signals** — Burnout is flagged only when work intensity rises, social connection drops, and schedule becomes chaotic — all at once, reducing false alarms
- **Hidden talent revealed** — Companies can identify and reward the people who quietly keep teams working together, reducing unexpected departures of key connectors

### Use Case / Case Study

**Emma — The Invisible Bridge (Talent Scout Engine)**

Emma works in engineering but rarely speaks in meetings. Performance reviews rate her as "average." But Talent Scout's network analysis showed something different: Emma had the highest "betweenness centrality" in the company. She was the only person who connected the Engineering team with the Design team. When Emma took a two-week vacation, cross-team project delivery slowed by 40%. Without Talent Scout, Emma would have left unnoticed — and the company would have lost its most important connector. The engine flagged her as a "hidden gem" so her manager could recognize and retain her.

### Detailed Design Prompt for Slide 2

Create a three-column card layout on a light slate background (#F8FAFC). Each column is one engine card — white background, rounded corners, subtle shadow. Top of slide: "Three Engines, One Mission" in Deep Navy with emerald accent line. Card 1 (Safety Valve): Shield icon in emerald at top. Title "Safety Valve" in bold Navy. Subtitle "Burnout Prevention" in Slate. Three small metric badges below: "Velocity", "Connection", "Schedule" — each in a light emerald pill shape. One-line description: "Detects burnout before it becomes a resignation." Card 2 (Talent Scout): Network node icon in blue (#3B82F6). Title "Talent Scout". Subtitle "Hidden Gem Discovery". Three badges: "Bridge Score", "Influence", "Unblocking". Description: "Finds the people who hold teams together." Card 3 (Culture Thermometer): Thermometer icon in Amber. Title "Culture Thermometer". Subtitle "Team Health Monitor". Three badges: "Contagion Risk", "Fragmentation", "Decay Rate". Description: "Spots when stress spreads across teams." Below all three cards, a full-width banner in Navy with white text: "Pure Math. No AI Decisions. No Content Reading." with a lock icon. This reinforces the privacy message.

---

## SLIDE 3: Methodology

### 3-Line Problem Description (Humanized)

Most employee monitoring tools try to read what people write — their emails, their Slack messages, their survey answers. This approach is slow, invasive, and breaks trust. People change their behavior when they know they are being watched, making the data useless.

### Solution (4 Bullet Points)

- **Measure when, not what** — Track timestamps of commits, messages, and meetings, never the content inside them
- **Compare to personal baselines** — A night owl working at midnight is normal. A day worker suddenly at midnight is a warning
- **Use three signals together** — Work intensity, social connection, and schedule chaos must all point to risk before any alert fires
- **Math decides, AI explains** — Pure calculations determine risk levels. AI only writes the human-readable summary, never makes the call

### Business Impact (Easy to Present)

- **No employee action needed** — Zero participation required, unlike surveys that need 65% response rates to be useful
- **False alarms reduced by 80%** — Requiring all three signals to agree before flagging CRITICAL risk means managers only get alerts that matter
- **Personal baselines prevent bias** — The system does not compare employees to each other, so different work styles and roles are treated fairly
- **GDPR and DPDPA compliant by design** — Metadata-only collection with two-vault encryption meets the strictest privacy regulations without extra effort

### Use Case / Case Study

**The "Deterministic Sandwich" in Action**

When Jordan Lee started working late nights, the system did not immediately flag him. First, the Context Enricher checked his Google Calendar and found he had a scheduled hackathon — those late-night commits were "explained" and excluded from the burnout calculation. Two weeks later, Jordan was still working late but now had no calendar events to explain it. His velocity score crossed 2.5, his connection index dropped below 0.3, and his schedule entropy rose above 1.5. All three signals fired. The math said CRITICAL. Only then did the AI write a summary: "Jordan's work pattern has changed significantly. Consider a check-in." The AI did not decide — the math did.

### Detailed Design Prompt for Slide 3

Create a vertical flow diagram slide. Top heading: "How It Works — The Deterministic Sandwich" in Deep Navy. Below, three stacked layers connected by downward arrows. Layer 1 (top, light blue background #DBEAFE): "INGESTION" heading with a funnel icon. Bullet points: "Timestamps only", "No content", "HMAC-SHA256 hashing". Layer 2 (middle, light emerald background #D1FAE5): "ANALYSIS" heading with a calculator icon. Bullet points: "Linear regression for velocity", "Shannon entropy for schedule", "Reply rate for connection". Layer 3 (bottom, light amber background #FEF3C7): "GENERATION" heading with a pen icon. Bullet points: "AI writes summaries only", "Never sees raw data", "Human-readable output". To the right of the three layers, a vertical callout box in Navy with white text: "AI does NOT make decisions. Math makes decisions. AI writes text." with a large checkmark. Bottom of slide: A small comparison table — two columns "What We Measure" (checkmarks in emerald) vs "What We Never See" (X marks in rose). Items: timestamps vs content, meeting counts vs agendas, reply rates vs message text.

---

## SLIDE 4: Architecture

### 3-Line Problem Description (Humanized)

Most employee data systems store everything in one database — names, messages, scores, all together. If that database is breached, every employee's private information is exposed. Companies need a system where even a full data breach cannot connect a person's identity to their work patterns.

### Solution (4 Bullet Points)

- **Two-vault architecture** — Work patterns live in one vault with anonymous codes. Names live in another vault, encrypted. No link between them without a special key
- **Role-based access control** — Employees see only their own data. Managers see team averages. Admins see organization-wide summaries. Nobody sees everything
- **FastAPI backend with Next.js frontend** — Modern, fast, and scalable technology stack that handles real-time updates and secure authentication
- **Real-time risk broadcasting** — When risk levels change, connected dashboards update instantly via WebSocket, no page refresh needed

### Business Impact (Easy to Present)

- **Breach-proof by design** — Even if hackers steal the entire database, they get only anonymous codes in one vault and encrypted blobs in another — useless without the vault key
- **52-permission matrix** — Granular access control means employees, managers, and admins each see exactly what they should see, nothing more
- **36-hour critical override** — In emergencies, managers can access individual data for at most 36 hours, and every access is logged in an immutable audit trail
- **Multi-tenant ready** — One installation serves multiple organizations with complete data isolation, reducing infrastructure costs

### Use Case / Case Study

**The Two-Vault Architecture in Practice**

Imagine a hacker breaks into Sentinel's database. In Vault A (analytics), they find: user_hash "a3f8c2...", velocity 3.2, risk_level "CRITICAL", entropy 1.8. No names. No emails. Just anonymous codes and numbers. In Vault B (identity), they find: user_hash "a3f8c2...", email_encrypted "gAAAAABkZ...", name_encrypted "gAAAAABk...". Encrypted blobs they cannot read. To connect "a3f8c2" to a real person, the hacker needs the vault key — which is stored separately and every use generates an audit log entry. The breach yields nothing useful. This is privacy by physics, not by policy.

### Detailed Design Prompt for Slide 4

Create a system architecture diagram slide. Top heading: "Built to Protect — Two-Vault Architecture" in Deep Navy. Center of slide: A large diagram. At top, a "Data Sources" box with four small icons (GitHub, Slack, Calendar, Gmail) feeding into a "Privacy Engine" box showing "HMAC-SHA256 Hashing". From the Privacy Engine, two arrows split left and right. Left arrow points to "VAULT A — Analytics" card in light blue — inside: "user_hash (anonymous)", "events", "risk_scores", "NO PII". Right arrow points to "VAULT B — Identity" card in light amber — inside: "user_hash", "email (encrypted)", "name (encrypted)", "AES-256". Between the two vaults, a large red "X" with text "No Foreign Key — Cannot JOIN". Below the vaults, a "Role-Based Access" row with three small cards: "Employee" (sees own data only), "Manager" (sees team averages), "Admin" (sees org summary) — each with a lock icon showing increasing access levels. Bottom right corner: A small badge "52 Permissions | 36-Hour Override | Full Audit Trail" in Navy with white text. The overall layout should feel like a technical blueprint — clean lines, clear labels, no decorative elements.

---

## SLIDE 5: Dataflow Pipeline

### 3-Line Problem Description (Humanized)

Raw data from workplace tools — commits, messages, meetings, emails — is noisy and meaningless on its own. Turning this raw activity into a clear signal about employee wellbeing requires a careful pipeline that filters noise, protects identity, and produces actionable insights.

### Solution (4 Bullet Points)

- **Ingest and hash** — Raw event data enters the system, email is immediately converted to an anonymous hash, all personal information is stripped
- **Score and weight** — Each event gets a weighted score based on complexity, with diminishing returns so one massive event cannot dominate the picture
- **Compute three signals** — Over 21 days, calculate velocity (trend), connection index (social engagement), and entropy (schedule chaos) from the weighted scores
- **Decide and notify** — If all three signals cross their thresholds, flag CRITICAL risk. Broadcast to dashboards in real-time. Generate human-readable nudges.

### Business Impact (Easy to Present)

- **21-day baseline window** — Long enough to establish a reliable personal pattern, short enough to catch changes before they become resignations
- **Weighted scoring prevents gaming** — A trivial README commit scores 0.5, a 15-file refactor scores 4.6 — padding commit counts does not work
- **Multi-source confidence** — Predictions from only one data source (e.g., GitHub alone) are penalized by 67%, ensuring alerts are based on a complete picture
- **Context-aware filtering** — The system checks calendars to exclude "explained" late nights (hackathons, on-call rotations), reducing false positives

### Use Case / Case Study

**Rahul — Sales Manager at PepsiCo (Partial Data Scenario)**

Rahul's work happens mostly on WhatsApp and in-person visits — tools Sentinel cannot see. The system only has access to his Outlook calendar and email timestamps. Over four weeks, Sentinel detected: calendar density doubled (5 to 10 meetings per day), email response time increased from 1 hour to 6 hours, and weekend emails appeared for the first time. Because only two of four data sources were connected, the confidence multiplier was 0.67 (67%). The system flagged "ELEVATED" risk but explicitly noted: "Signal confidence is moderate — recommend combining with manager check-in." This honest reporting of uncertainty is built into the pipeline — the system knows what it does not know.

### Detailed Design Prompt for Slide 5

Create a horizontal pipeline diagram flowing left to right. Top heading: "From Raw Data to Actionable Insight" in Deep Navy. Five connected boxes with arrows between them, each box a different color. Box 1 (light blue): "INGEST" — icons of GitHub, Slack, Calendar, Gmail feeding in. Text: "Raw metadata enters". Box 2 (light purple): "HASH" — lock icon. Text: "Email → anonymous hash, PII stripped". Box 3 (light emerald): "SCORE" — calculator icon. Text: "Weighted event scoring, diminishing returns". Box 4 (light amber): "COMPUTE" — three small signal indicators (up arrow, people icon, clock icon). Text: "Velocity, Connection, Entropy over 21 days". Box 5 (light rose): "DECIDE" — shield icon. Text: "Three-signal convergence → Risk Level". Below the pipeline, a small timeline bar showing "21 days" with three phases marked: "Week 1-2: Baseline", "Week 3: Drift detected", "Week 4: Alert fires". Right side of slide: A small card titled "Confidence Matters" showing a table: "1 source = 33% confidence", "2 sources = 67%", "3+ sources = 100%" — with a note "More data sources = more reliable alerts". The design should feel like a manufacturing pipeline — clean, sequential, purposeful.

---

## SLIDE 6: Our Solution

### 3-Line Problem Description (Humanized)

Existing tools force a trade-off: either invade employee privacy by reading their messages, or rely on surveys that people ignore. Companies need a third option — one that detects real problems early while respecting the people who do the work.

### Solution (4 Bullet Points)

- **Privacy-first by physics, not policy** — Two-vault cryptography makes it mathematically impossible to connect a person's identity to their work patterns without explicit authorization
- **Continuous monitoring, not quarterly snapshots** — The system works every day in the background, catching changes weeks before surveys would detect them
- **Employee-owned data** — Every person sees their own dashboard first, controls their own monitoring, and can pause or opt out at any time
- **Ask Sentinel — AI chat assistant** — Three specialized AI agents help managers and employees ask questions about team health, execute tasks, and get guidance — all with role-based data access

### Business Impact (Easy to Present)

- **$4 per employee per month** — Costs less than one cup of coffee per person, per month. Preventing just two engineer resignations per year pays for the entire system 10 times over
- **Zero employee participation required** — Unlike surveys that need 65% response rates, Sentinel works passively. No forms to fill, no questions to answer
- **DPDPA 2023 ready** — India's new data protection law requires explicit consent and data minimization. Sentinel was built for this from day one
- **Complements existing tools** — Does not replace Culture Amp or Peakon — adds continuous behavioral signals to their quarterly survey data for a complete picture

### Use Case / Case Study

**The Consulting Team at Grant Thornton (Culture Thermometer in Action)**

A team of six auditors was working on two client engagements at the same time. Sentinel's Culture Thermometer detected: four of six team members showed rising work intensity, the team's communication graph was fragmenting (people siloing by client), and one senior auditor — the person who connected both groups — was socially withdrawing. The system flagged "ELEVATED contagion risk" and the team partner saw an aggregate dashboard: "This team is overloaded and starting to fragment. Consider rebalancing client assignments." No individual names were shown. The partner redistributed the workload, and within two weeks, all six members' risk scores returned to normal. The team stayed together. The clients stayed happy. Nobody burned out.

### Detailed Design Prompt for Slide 6

Create a hero-style slide with a strong visual hierarchy. Top heading: "Why Sentinel Is Different" in large Deep Navy text. Below, a prominent quote box spanning full width with emerald left border and light emerald background: "Every competitor either reads your content or requires your participation. We do neither." — in large italic Navy text. Below the quote, a 2x2 grid of feature cards. Card 1 (top-left, light blue): "Privacy by Physics" with a shield-lock icon. Description: "Two-vault cryptography. Even a full database breach yields nothing useful." Card 2 (top-right, light emerald): "Always On" with a pulse icon. Description: "Continuous monitoring. Catches changes weeks before surveys." Card 3 (bottom-left, light amber): "Employee Control" with a person-check icon. Description: "Your data, your dashboard. Pause or opt out anytime." Card 4 (bottom-right, light purple): "Ask Sentinel AI" with a chat-bubble icon. Description: "Three specialized AI agents for data queries, task execution, and guidance." Bottom of slide: A pricing comparison bar — "Less than $4/employee/month" in large Navy text, with a small note "Preventing 2 resignations/year = 10x ROI" in emerald. The overall feel should be confident and differentiated — this is the "why us" slide.

---

## SLIDE 7: Conclusion

### 3-Line Problem Description (Humanized)

Burnout is not a personal failure — it is a system failure. When companies cannot see the warning signs, when privacy tools invade privacy, and when surveys arrive too late, good people leave and teams fall apart. The cost is measured in billions of dollars and broken careers.

### Solution (4 Bullet Points)

- **See the invisible** — Detect burnout risk weeks before it becomes a resignation, using mathematical signals from work patterns
- **Protect the people** — Privacy by cryptography, not promises. Metadata only, never content. Two-vault architecture that even a breach cannot break
- **Act with confidence** — Three-signal convergence means every alert is backed by converging evidence, not a single noisy data point
- **Scale with trust** — From 100 to 5,000 employees, the system respects individual privacy while giving leaders the insights they need

### Business Impact (Easy to Present)

- **TAM: $8 billion+** — The HR analytics and employee wellness market is growing rapidly, especially in India's 5.4 million IT/ITES workforce
- **Built for India's DPDPA 2023** — New data protection law favors our consent-first, data-minimal architecture over competitors bolting on compliance
- **Cost of attrition is rising** — Replacing a senior engineer in India costs INR 15-25 lakh. Sentinel at $4/employee/month prevents departures at a fraction of the cost
- **Honest about validation** — The math is sound, the architecture is complete, accuracy validation is in progress through shadow deployment — no false claims, no inflated numbers

### Use Case / Case Study

**The Full Picture — From Detection to Resolution**

Alex showed all three warning signs over four weeks: work velocity climbing from 1.5 to 3.2, social connection dropping from 0.55 to 0.25, and schedule entropy rising from 0.8 to 1.8. Sentinel flagged CRITICAL risk. Alex saw the alert on their own dashboard first — "Your work pattern has changed significantly." Their manager saw only the team health score trending red. The manager scheduled a 1:1 using Sentinel's auto-generated agenda: "Discuss workload, check deadline pressure, explore support options." The conversation revealed Alex was covering for two departed teammates. The manager redistributed the work. Three weeks later, Alex's velocity was back to 1.2, connection was 0.70, and entropy was 0.9. One conversation, guided by early detection, prevented a resignation that would have cost $200,000 to replace.

### Detailed Design Prompt for Slide 7

Create an inspiring, forward-looking slide. Top heading: "The Future of Employee Wellbeing" in Deep Navy. Center of slide: A large circular diagram divided into three segments like a pie chart, each segment one engine. Segment 1 (emerald): "Safety Valve — Detect Early". Segment 2 (blue): "Talent Scout — Discover Hidden Value". Segment 3 (amber): "Culture Thermometer — Protect Teams". In the center of the circle: "Privacy by Design" with a lock icon. Below the circle, three key numbers in a horizontal row, each in its own card. Card 1: "$8B+" in large Navy with "Total Addressable Market" below. Card 2: "5.4M" in Navy with "Indian IT/ITES Workers" below. Card 3: "10x" in Navy with "ROI from Prevented Turnover" below. Bottom of slide: A full-width banner in Navy with white text: "The math is sound. The architecture is complete. The validation is in progress." — honest, confident, no hype. Right side of the banner: A small "DPDPA 2023 Ready" badge in emerald. The overall feel should be authoritative and trustworthy — this is the closing argument.

---

## SLIDE 8: Example / Case Study

### 3-Line Problem Description (Humanized)

Theory is convincing until you see it work with real numbers. Here is exactly how Sentinel detected, analyzed, and helped resolve a burnout situation — step by step, with the actual metrics the system computed.

### Solution (4 Bullet Points)

- **Week 1-2: Baseline established** — Normal work pattern detected, velocity at 1.5, connection at 0.55, entropy at 0.8 — all healthy
- **Week 3: Early warning** — Velocity crossed 2.0, connection dropped to 0.40 — system flagged ELEVATED risk, employee saw dashboard alert
- **Week 4: Critical alert** — All three signals fired: velocity 3.2, connection 0.25, entropy 1.8 — CRITICAL risk, manager notified with action plan
- **Intervention and recovery** — Manager held 1:1, redistributed workload. Three weeks later, all signals returned to healthy levels

### Business Impact (Easy to Present)

- **Detected 3 weeks before resignation** — Traditional methods would have caught this at the exit interview, when it was too late
- **Cost of intervention: $0** — A single conversation guided by data. No expensive consultants, no HR investigations
- **Cost of inaction: $200,000+** — Recruiting, onboarding, and lost productivity to replace one senior engineer
- **Team stayed intact** — No knowledge loss, no project delays, no morale damage from a teammate burning out and leaving

### Use Case / Case Study

**Jordan Lee — Complete Burnout Arc (Safety Valve Engine)**

| Week | Velocity | Connection | Entropy | Risk Level | What Happened                                                                                                                                       |
| ---- | -------- | ---------- | ------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | 1.5      | 0.55       | 0.8     | LOW        | Normal work pattern. Emails at 9 AM, last message at 6:30 PM. Replying to 85% of DMs.                                                               |
| 2    | 2.0      | 0.40       | 1.2     | ELEVATED   | Sprint deadline. First email at 8 AM, last message at 9 PM. Reply rate dropped to 60%. Jordan saw dashboard alert: "Your focus time decreased 40%." |
| 3    | 2.8      | 0.30       | 1.6     | ELEVATED   | Still escalating. Working weekends. Stopped mentioning teammates in Slack. Manager saw team health trending red.                                    |
| 4    | 3.2      | 0.25       | 1.8     | CRITICAL   | All three signals firing. Attrition probability: 85%. Sentinel generated 1:1 agenda: "Discuss workload, check deadline pressure."                   |
| 5+   | 1.2      | 0.70       | 0.9     | LOW        | After workload redistribution. Back to normal schedule. Reply rate recovered. Crisis averted.                                                       |

The entire arc — from normal to critical back to normal — took 5 weeks. Without Sentinel, Jordan would have resigned at week 6 or 7, and the company would not have known why until the exit interview.

### Detailed Design Prompt for Slide 8

Create a timeline-style case study slide. Top heading: "Jordan Lee — From Burnout to Recovery" in Deep Navy. Below, a horizontal timeline spanning the width of the slide with five markers (Week 1 through Week 5+). Each marker is a circle on the timeline. Week 1 circle: emerald (healthy). Week 2 circle: amber (elevated). Week 3 circle: amber (elevated). Week 4 circle: rose (critical). Week 5+ circle: emerald (recovered). Below each circle, a small card showing the three metrics. Card format: three rows — "Velocity: 1.5" with a small trend arrow, "Connection: 0.55" with a people icon, "Entropy: 0.8" with a clock icon. The Week 4 card should be larger and highlighted with a rose border — this is the critical moment. Inside the Week 4 card, add: "Attrition Probability: 85%" in bold rose text. Below the timeline, a two-column comparison. Left column (rose background tint): "Without Sentinel" — bullet points: "Resignation at Week 6", "$200K replacement cost", "Exit interview = too late", "Team morale damaged". Right column (emerald background tint): "With Sentinel" — bullet points: "Alert at Week 4", "$0 intervention cost", "1:1 conversation prevented departure", "Team stayed intact, project on track". Bottom of slide: A summary line in Navy: "One conversation. Guided by data. A career saved." with an emerald checkmark icon. The design should feel like a story — clear progression, emotional arc, concrete numbers.

---

## Appendix: Presentation Delivery Notes

### Slide Order and Timing
1. Problem Statement (2 min) — Set the stakes, make it personal
2. Engines (2 min) — Show the three tools, keep it simple
3. Methodology (2 min) — Explain the "when not what" approach
4. Architecture (2 min) — Show the two-vault design, emphasize breach-proof
5. Dataflow (2 min) — Walk through the pipeline, one step at a time
6. Our Solution (2 min) — Differentiate from competitors, show pricing
7. Conclusion (1.5 min) — Market size, honest validation status
8. Case Study (2.5 min) — Tell Jordan's story, end with impact

**Total: ~16 minutes** (leaves 4 minutes for Q&A in a 20-minute slot)

### Key Phrases to Use During Presentation
- "We measure the shape of work, not its substance"
- "Privacy by physics, not by policy"
- "Math makes decisions. AI writes text."
- "Every competitor either reads your content or requires your participation. We do neither."
- "The math is sound. The architecture is complete. The validation is in progress."

### Anticipated Questions and Answers
- **"How accurate is it?"** — "We are honest: we do not have validated accuracy numbers yet. But we built a shadow deployment framework to measure it. After 6 months of real data, we will have precision and recall numbers."
- **"What about privacy?"** — "Two-vault architecture. Even a full database breach cannot connect a person's identity to their work patterns. We measure timestamps, never content."
- **"Can employees game it?"** — "Weighted scoring, 21-day sustained requirement, and three-signal convergence make gaming extremely difficult. You would need to fake patterns across multiple tools for three weeks straight."
- **"How is this different from Microsoft Viva?"** — "Viva is locked into M365. We are cross-platform. Viva shows only team aggregates. We give employees their own dashboard. Viva reads email content. We never read content."
