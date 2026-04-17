# Algoquest (Sentinel) — Complete Slide Deck

## Design Theme (Apply to ALL Slides)

**Color Palette:**
- Primary: Deep Navy (#0F172A) — backgrounds, headers, key text
- Accent: Emerald (#10B981) — highlights, CTAs, success indicators
- Secondary: Slate Gray (#64748B) — body text, supporting info
- Warning: Amber (#F59E0B) — risk indicators, caution
- Danger: Rose (#EF4444) — critical alerts, problems
- Light: White (#FFFFFF) — backgrounds, cards
- Muted: Slate-50 (#F8FAFC) — subtle backgrounds, alternating sections

**Typography (Inter Font Family):**
- Title: 48px, Bold, Deep Navy — main slide headings
- Section: 32px, SemiBold — subheadings
- Body: 18px, Regular, Slate Gray — main content
- Data/Numbers: 24px, Mono — metrics and scores
- Caption: 14px, Regular — small notes and footers

**Layout Principles:**
- Full-width sections with max-width 1200px content area
- 80px padding top/bottom, 60px left/right
- Cards with 16px border-radius, subtle shadow (0 4px 6px -1px rgba(0,0,0,0.1))
- Max 5-6 lines per text block
- Icon size: 24px standard, 48px for feature icons
- Spacing scale: 8px base unit (8, 16, 24, 32, 48, 64, 80)

**Visual Elements:**
- SVG icons only (no emojis) — use Lucide-style icons
- Data visualization with clean bar charts, line graphs
- Number badges in emerald/amber/rose pills
- Thin emerald accent line (2px) under section headers
- Subtle gradient backgrounds where appropriate

---

## SLIDE 1: Current Situation and Problem Statement

### Content

**Problem Statement (3 lines, humanized):**
Employees work harder and harder until they break — but their managers only notice when they hand in their resignation. Surveys ask how people feel, yet miss those who have already stopped replying to teammates and started withdrawing. Meanwhile, the quiet heroes who actually hold teams together never show up in performance reviews.

**The Cost (4 bullet points):**
- **$500 billion** lost every year in the US from burnout-related turnover and sick days
- **76% of employees** experience burnout — that's 3 out of 4 people on your team
- **6 months** average detection time — usually discovered at the exit interview, when it's too late
- **$150,000 to $300,000** cost to replace one senior engineer — recruiting, training, lost productivity

**The Gap:**
By the time anyone sees a problem, it is too late: the best people are gone, teams are fractured, and the company has spent a fortune just to replace one of them.

### Design Specification

**Layout:**
- Background: Gradient from Navy (#0F172A) at top to Slate-900 (#1E293B) at bottom
- Full-height hero section with centered content
- Problem text in large white text (32px), max-width 800px, centered
- Below: 4 statistic cards in horizontal row with staggered vertical offset (cards 2 and 4 raised 20px)

**Components:**
- **Stat Cards:** White background, rounded-2xl, shadow-lg, padding 32px, width 240px
  - Card 1: Rose-500 number "$500B", caption "Annual US cost"
  - Card 2: Amber-500 number "76%", caption "Employees burned out"
  - Card 3: Rose-500 number "6 mo", caption "Avg detection time"
  - Card 4: Emerald-500 number "$300K", caption "Per replacement cost"
- **Bottom CTA bar:** Semi-transparent navy with white text: "There's a better way. Introducing Sentinel."

**Visual Effects:**
- Subtle animated gradient background (navy to slate)
- Stat numbers have slight pulse animation on load
- Emerald accent line (3px) above the problem statement

---

## SLIDE 2: Engines Explanation

### Content

**Header:** Three Engines, One Mission

**Engine 1: Safety Valve — Burnout Prevention**
- Detects burnout risk by measuring how fast work patterns change from a person's normal routine
- Uses three mathematical signals: Velocity (work intensity trend), Connection (social engagement), Entropy (schedule chaos)
- Only fires CRITICAL alerts when ALL THREE signals converge — reducing false alarms

**Engine 2: Talent Scout — Hidden Gem Discovery**
- Uses Organizational Network Analysis (NetworkX) to find structurally critical people invisible to traditional metrics
- Measures: Betweenness Centrality (who bridges teams), Eigenvector Centrality (connection to influencers), Unblocking Score (who helps others)
- Finds the quiet connectors who hold teams together but never appear in performance reviews

**Engine 3: Culture Thermometer — Team Health**
- Aggregates individual risks to detect team-level burnout patterns and contagion risk
- Uses SIR epidemiological model (scipy.odeint) — burnout spreads like a virus across teams
- Prevents resignation cascades by spotting when stress is spreading from person to person

**Differentiator:** All three use pure math, not AI guesses. Math makes decisions. AI only writes text.

### Design Specification

**Layout:**
- Background: White (#FFFFFF)
- Header centered with emerald accent underline
- Three engine cards in horizontal row, equal width (32% each), gap 24px
- Each card has distinct top border color: Emerald for Safety Valve, Blue for Talent Scout, Amber for Culture Thermometer

**Components:**
- **Engine Cards:**
  - Safety Valve Card: Top border 4px emerald-500, icon Shield with pulse animation
    - Title: "Safety Valve" (Navy, 24px Bold)
    - Subtitle: "Burnout Prevention" (Slate, 14px)
    - Three metric pills: "Velocity" | "Connection" | "Entropy" (emerald-100 background, emerald-700 text)
    - Description in 16px slate text
  - Talent Scout Card: Top border 4px blue-500, icon Network/Nodes
    - Title: "Talent Scout"
    - Subtitle: "Hidden Gem Discovery"
    - Three metric pills: "Bridge Score" | "Influence" | "Unblocking"
  - Culture Thermometer Card: Top border 4px amber-500, icon Thermometer
    - Title: "Culture Thermometer"
    - Subtitle: "Team Health Monitor"
    - Three metric pills: "Contagion Risk" | "Fragmentation" | "Decay Rate"

- **Bottom Banner:** Full-width navy background with white text
  - Quote: "Math makes decisions. AI writes text."
  - Lock icon with "Pure Math. No AI Decisions. No Content Reading."

---

## SLIDE 3: Methodology

### Content

**Header:** How It Works — The Deterministic Sandwich

**Three Layers:**

**Layer 1: Ingestion (Input)**
- Collects metadata only: timestamps, counts, frequencies
- Never reads message content, email bodies, or meeting notes
- Privacy-protected from the start with HMAC-SHA256 hashing

**Layer 2: Analysis (Math)**
- Velocity: Linear regression (scipy.stats.linregress) on 21-day activity trends
- Connection Index: Reply rate + mention frequency across Slack/PRs/email
- Entropy: Shannon entropy measuring schedule chaos
- Weighted scoring with diminishing returns — a README edit doesn't equal a real refactor

**Layer 3: Generation (Output)**
- AI writes human-readable summaries and nudges
- AI NEVER sees raw employee data — only mathematical outputs
- Role-based scoping: employees see own data, managers see team aggregates

**Key Insight:** We measure WHEN, not WHAT. A timestamp tells us everything about work patterns. Message content tells us nothing we need and everything we should not have.

### Design Specification

**Layout:**
- Background: Slate-50 (#F8FAFC)
- Three-layer vertical flow diagram, centered, max-width 900px
- Each layer is a horizontal card with icon left, content right
- Downward arrows between layers in emerald

**Components:**
- **Layer 1 Card (Blue tint):** Background blue-50, border-left 4px blue-500
  - Left: Funnel/filter icon in blue circle (48px)
  - Right: "INGESTION" in blue-700 Bold, 20px
  - Bullet points: "Timestamps only" | "No content reading" | "HMAC-SHA256 hashing"
  
- **Layer 2 Card (Emerald tint):** Background emerald-50, border-left 4px emerald-500
  - Left: Calculator/chart icon in emerald circle
  - Right: "ANALYSIS" in emerald-700 Bold
  - Three formulas displayed in mono font:
    - "Velocity = scipy.stats.linregress(days, scores)"
    - "Connection = (replies + mentions) / total"
    - "Entropy = -Σ(p × log₂(p))"
  
- **Layer 3 Card (Amber tint):** Background amber-50, border-left 4px amber-500
  - Left: Pen/text icon in amber circle
  - Right: "GENERATION" in amber-700 Bold
  - Bullet points: "AI writes summaries" | "Never sees raw data" | "Human-readable output"

- **Side Callout Box:** Positioned to the right of the layers
  - Navy background (#0F172A), white text, padding 24px, rounded-xl
  - Quote: "AI does NOT make decisions. Math makes decisions. AI writes text."
  - Checkmark icon in emerald

- **Bottom Comparison:** Two-column table
  - Left column (Emerald): "What We Measure" — timestamps, meeting counts, reply rates
  - Right column (Rose): "What We Never See" — content, agendas, message text

---

## SLIDE 4: Architecture

### Content

**Header:** Built to Protect — Two-Vault Privacy Architecture

**The Architecture:**
- **Vault A (Analytics):** Anonymous work patterns — user_hash, events, risk_scores. NO PII. Even a breach yields only anonymous codes.
- **Vault B (Identity):** Encrypted personal data — user_hash, email_encrypted, name_encrypted with AES-256. Reversible only with audit-logged access.
- **Privacy Boundary:** HMAC-SHA256 hashing converts email to user_hash. No foreign key between vaults. Cannot JOIN without the vault key.

**Role-Based Access Control:**
- **Employee:** Sees own data only. Controls monitoring pause/opt-out.
- **Manager:** Sees team averages only. Individual data requires consent or 36-hour emergency override.
- **Admin:** Sees organization-wide summaries. Full audit trail of all access.

**52-Permission Matrix:** Granular access control with immutable audit logging.

### Design Specification

**Layout:**
- Background: White with subtle grid pattern (1px slate-200 lines)
- Central diagram showing the two-vault architecture
- Data flow from top (Sources) → Privacy Engine → Split to Vaults
- Below: Three role cards in horizontal row

**Components:**
- **Central Diagram:**
  - Top: "Data Sources" with 4 small icons (GitHub, Slack, Calendar, Gmail)
  - Arrow down to "Privacy Engine" box — "HMAC-SHA256 Hashing"
  - Two arrows split: Left to "VAULT A" card (blue), Right to "VAULT B" card (amber)
  - Vault A: "Anonymous work patterns" | "user_hash" | "NO PII"
  - Vault B: "Encrypted identity" | "AES-256" | "Audit-logged access"
  - Between vaults: Large "❌" symbol with "No Foreign Key — Cannot JOIN"
  
- **Role Cards:**
  - Employee card: Icon User, border emerald, "Own Data Only", "Pause/Opt-out controls"
  - Manager card: Icon Users, border blue, "Team Averages", "36-hr override max"
  - Admin card: Icon Shield, border navy, "Org Summary", "Full Audit Trail"

- **Bottom Badge Bar:** Navy background, white text
  - "52 Permissions | 36-Hour Override | Full Audit Trail | Breach-Proof by Design"

---

## SLIDE 5: Dataflow Pipeline

### Content

**Header:** From Raw Data to Actionable Insight

**The Pipeline (5 Steps):**

1. **INGEST** — Raw metadata from GitHub, Slack, Calendar, Gmail
2. **HASH** — Email → anonymous user_hash, all PII stripped immediately
3. **SCORE** — Weighted event scoring: min(files × log1p(changes), 5.0). Diminishing returns prevent gaming.
4. **COMPUTE** — Three signals over 21 days:
   - Velocity: Work intensity trend (linear regression)
   - Connection: Social engagement (reply + mention rates)
   - Entropy: Schedule chaos (Shannon entropy)
5. **DECIDE** — Risk assessment: CRITICAL requires ALL THREE signals to fire together

**Confidence Matters:**
- 1 data source = 33% confidence (heavily discounted)
- 2 sources = 67% confidence
- 3+ sources = 100% confidence

**Timeline:** 21-day baseline → Week 3: Drift detected → Week 4: Alert fires (if sustained)

### Design Specification

**Layout:**
- Background: Gradient from white to slate-50
- Horizontal pipeline with 5 connected stages
- Each stage is a card connected by arrows
- Timeline bar below showing progression
- Confidence table on the right

**Components:**
- **Pipeline Cards (left to right):**
  1. "INGEST" — Blue, funnel icon — "GitHub | Slack | Calendar | Gmail"
  2. "HASH" — Purple, lock icon — "Email → user_hash" | "PII stripped"
  3. "SCORE" — Emerald, scale icon — "Weighted events" | "Diminishing returns"
  4. "COMPUTE" — Amber, activity icon — "3 signals × 21 days"
  5. "DECIDE" — Rose, shield icon — "All 3 converge → Alert"

- **Timeline Bar:**
  - Horizontal progress bar with markers at Week 1, Week 2, Week 3, Week 4
  - Week 1-2: Green (Baseline)
  - Week 3: Amber (Drift detected)
  - Week 4: Rose (Alert fires if sustained)

- **Confidence Table:**
  - Title: "Confidence Matters"
  - Row 1: "1 source" | "33%" (rose pill)
  - Row 2: "2 sources" | "67%" (amber pill)
  - Row 3: "3+ sources" | "100%" (emerald pill)

---

## SLIDE 6: Our Solution

### Content

**Header:** Why Sentinel Is Different

**The Positioning Statement:**
"Every competitor either reads your content or requires your participation. We do neither."

**Four Pillars:**

1. **Privacy by Physics** — Two-vault cryptography makes it mathematically impossible to connect identity to work patterns without explicit authorization. Even a full database breach yields nothing useful.

2. **Always On** — Continuous monitoring works every day in the background. Catches changes weeks before quarterly surveys would detect them. Zero employee participation required.

3. **Employee Control** — Your data, your dashboard. Employees see their own signals first. Pause monitoring anytime. One-click opt-out. This is a mirror, not surveillance.

4. **Ask Sentinel AI** — Three specialized AI agents: OrgAgent (data queries with RBAC), TaskAgent (execute tools via Composio), GeneralAgent (conversational). Role-scoped access. Full audit trail.

**Pricing:** Less than $4 per employee per month. Preventing just 2 resignations per year = 10x ROI.

### Design Specification

**Layout:**
- Background: Navy (#0F172A)
- All text white or light
- Large quote at top with emerald accent
- 2×2 grid of feature cards below
- Pricing banner at bottom

**Components:**
- **Quote Block:**
  - Large italic text (32px): "Every competitor either reads your content or requires your participation. We do neither."
  - Emerald left border (4px)
  
- **Feature Cards (2×2 grid):**
  1. "Privacy by Physics" — Shield-lock icon, description about two-vault encryption
  2. "Always On" — Pulse/activity icon, description about continuous monitoring
  3. "Employee Control" — User-check icon, description about employee-first design
  4. "Ask Sentinel AI" — Message-circle icon, description about 3-agent system
  
- **Pricing Banner:**
  - Emerald background (#10B981)
  - White text: "Less than $4/employee/month"
  - Subtext: "Preventing 2 resignations/year = 10x ROI"

---

## SLIDE 7: Conclusion

### Content

**Header:** The Future of Employee Wellbeing

**Three Engines Circle:**
- Safety Valve — Detect Early (Emerald)
- Talent Scout — Discover Hidden Value (Blue)
- Culture Thermometer — Protect Teams (Amber)

**Center:** Privacy by Design (Lock icon)

**Market Opportunity:**
- **TAM: $8 billion+** — HR analytics and employee wellness market
- **SAM: $2 billion** — Mid-market tech companies (100-5,000 employees)
- **Target: 5.4 million** — Indian IT/ITES workforce, growing rapidly

**The Honest Stance:**
"The math is sound. The architecture is complete. The validation is in progress."

**DPDPA 2023 Ready:** Built for India's new data protection law from day one.

**Closing:** From detection to resolution in 5 weeks. One conversation guided by data. A career saved. A team kept together.

### Design Specification

**Layout:**
- Background: White
- Large circular diagram in center showing three engines as segments
- Market numbers below in horizontal row
- Honest stance banner in navy
- Inspirational closing at bottom

**Components:**
- **Circular Diagram:**
  - Three equal segments (pie chart style)
  - Segment 1: Emerald, "Safety Valve" | "Detect Early"
  - Segment 2: Blue, "Talent Scout" | "Discover Value"
  - Segment 3: Amber, "Culture Thermometer" | "Protect Teams"
  - Center circle: Navy, "Privacy by Design" with lock icon

- **Market Cards:**
  - "$8B+" | "Total Addressable Market"
  - "5.4M" | "Indian IT/ITES Workers"
  - "10x" | "ROI from Prevented Turnover"

- **Honest Banner:**
  - Full-width navy background
  - White text: "The math is sound. The architecture is complete. The validation is in progress."
  - "DPDPA 2023 Ready" badge in emerald

- **Closing Statement:**
  - Large text: "One conversation. Guided by data. A career saved."
  - Emerald checkmark icon

---

## SLIDE 8: Example / Case Study — Jordan Lee

### Content

**Header:** Jordan Lee — From Burnout to Recovery

**The Complete Arc (5 Weeks):**

| Week | Velocity | Connection | Entropy | Risk Level | What Happened |
|------|----------|------------|---------|------------|---------------|
| 1 | 1.5 | 0.55 | 0.8 | LOW | Normal pattern. Emails 9 AM, done by 6:30 PM. |
| 2 | 2.0 | 0.40 | 1.2 | ELEVATED | Sprint deadline. Early starts, late nights. Reply rate drops to 60%. |
| 3 | 2.8 | 0.30 | 1.6 | ELEVATED | Still escalating. Working weekends. Stopped mentioning teammates. |
| 4 | 3.2 | 0.25 | 1.8 | CRITICAL | All three signals fire. Attrition probability: 85%. 1:1 scheduled. |
| 5+ | 1.2 | 0.70 | 0.9 | LOW | Workload redistributed. Back to normal. Crisis averted. |

**Without Sentinel:**
- Resignation at Week 6
- $200,000+ replacement cost
- Exit interview = too late
- Team morale damaged
- Knowledge lost

**With Sentinel:**
- Alert at Week 4
- $0 intervention cost
- 1:1 conversation prevented departure
- Team stayed intact
- Project on track

**The Result:** One conversation guided by data. A career saved.

### Design Specification

**Layout:**
- Background: Slate-50
- Horizontal timeline with 5 markers
- Timeline cards showing metrics for each week
- Week 4 highlighted as critical moment
- Two-column comparison below (Without vs With Sentinel)
- Inspirational closing at bottom

**Components:**
- **Timeline:**
  - Horizontal line with 5 circular markers
  - Week 1: Emerald circle
  - Week 2: Amber circle
  - Week 3: Amber circle
  - Week 4: Rose circle (larger, pulsing border) — CRITICAL
  - Week 5+: Emerald circle with checkmark
  
- **Week Cards (below each marker):**
  - Small cards with three metrics displayed
  - Format: "V: 1.5" | "C: 0.55" | "E: 0.8"
  - Week 4 card is larger with rose border: "Attrition: 85%" in bold

- **Comparison Section:**
  - Left column (Rose tinted): "Without Sentinel"
    - X icons for each negative outcome
  - Right column (Emerald tinted): "With Sentinel"
    - Check icons for each positive outcome

- **Closing Banner:**
  - Navy background
  - White text: "One conversation. Guided by data. A career saved."
  - Emerald checkmark

---

## Appendix: Presentation Delivery Notes

### Slide Order and Timing
1. Problem Statement (2 min)
2. Engines (2 min)
3. Methodology (2 min)
4. Architecture (2 min)
5. Dataflow (2 min)
6. Our Solution (2 min)
7. Conclusion (1.5 min)
8. Case Study (2.5 min)

**Total: ~16 minutes** (leaves 4 minutes for Q&A in a 20-minute slot)

### Key Phrases to Memorize
- "We measure the shape of work, not its substance"
- "Privacy by physics, not by policy"
- "Math makes decisions. AI writes text."
- "Every competitor either reads your content or requires your participation. We do neither."
- "The math is sound. The architecture is complete. The validation is in progress."

### Technical Numbers to Remember
- 3 engines (Safety Valve, Talent Scout, Culture Thermometer)
- 52 RBAC permissions
- 3 signals (velocity, belongingness, entropy)
- 21-day baseline window
- 2 vaults (analytics + identity)
- 0 messages read (metadata only)
- 36-hour critical override expiry
- $4 per employee per month
- $150K-$300K replacement cost

### Anticipated Questions

**Q: How accurate is it?**
A: We are honest — we do not have validated accuracy numbers yet. But we built a shadow deployment framework to measure it. After 6 months of real data, we will have precision and recall numbers.

**Q: What about privacy?**
A: Two-vault architecture. Even a full database breach cannot connect a person's identity to their work patterns. We measure timestamps, never content.

**Q: Can employees game it?**
A: Weighted scoring, 21-day sustained requirement, and three-signal convergence make gaming extremely difficult. You would need to fake patterns across multiple tools for three weeks straight.

**Q: How is this different from Microsoft Viva?**
A: Viva is locked into M365. We are cross-platform. Viva shows only team aggregates. We give employees their own dashboard. Viva reads email content. We never read content.
