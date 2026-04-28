---
title: "Build the Smallest Useful MVP"
guideNumber: 7
slug: "build-smallest-useful-mvp"
summary: "Design the smallest experiment that lets real customers experience the promised outcome and gives the team a clear decision."
phase: "Delivery"
expectedOutput: "A visible MVP Test Brief with promise, riskiest assumption, atomic unit of value, scope cuts, success/failure thresholds, evidence, and next decision."
status: draft
draft: false
updatedAt: 2026-04-27
---
## Brief
The MVP you defined in Guide 01 now becomes a learning vehicle, not a smaller full product.

Eric Ries defines it as "that version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort." He also warns that the MVP "is not about creating minimal products."

The goal is to answer one of these decision-critical questions:

- Does the customer urgently want this outcome?
- Will they take action now?
- Will they pay, commit, or invite others?
- Can the team deliver the promised result?

- Does the solution fit the workflow?
- Can the team reach this customer?
- Can the economics work?

Small is not enough. The test must create valid evidence. As Ries wrote in TechCrunch, "The goal of the MVP is to begin the process of learning, not end it." Any feature that does not help the customer reach the value moment or help the team answer the learning question is probably waste.

## Exercise
Work toward one shared artifact: an **MVP Test Brief**. No feature enters the build unless it connects to the atomic unit of value or the primary learning goal.

### 01. Write the value promise.
Use one sentence:

> For [specific beachhead customer], this MVP helps them [specific job/outcome] by [mechanism].

Reject vague promises like "save time," "improve productivity," or "AI assistant" until they are tied to a concrete workflow and result.

### 02. Identify the riskiest assumption.
Choose one primary learning goal. The risk may be demand, commitment, workflow fit, delivery, channel, economics, or repeat use.

Write it in testable language:

> We need to learn whether [specific customer] will [specific behavior] when offered [specific outcome] through [specific MVP/test format].

### 03. Define the atomic unit of value.
The **atomic unit of value** is the smallest complete customer outcome where the customer can say, "That helped."

Examples:
- Search engine: one useful search query.
- Billing-audit product: one recoverable billing error found.
- Hiring tool: one qualified candidate shortlist.
- Online bookstore: one book bought and received.

Define the customer job, completed outcome, value moment, manual work required, and behavior that would prove value.

### 04. Choose MVP or minimum viable test.
A **minimum viable test (MVT)** is a focused experiment that tests one assumption before building a product-like experience. Gagan Biyani describes it this way in First Round Review: "An MVT... does not attempt to look like the eventual product. It's rather a specific test of an assumption that must be true for the business to succeed."

Use an MVT when the risk is demand, pricing, channel, comprehension, or feasibility. Formats include sales calls, landing pages, paid pre-orders, demo videos, fake-door tests, quoted proposals, letters of intent (LOIs), or technical spikes.

Use an MVP when customers must experience the end-to-end outcome. Formats include concierge service, Wizard of Oz workflow, no-code workflow, manual service, paid pilot, or narrow software slice. A **Wizard of Oz MVP** looks product-like while humans do work behind the scenes. A **concierge MVP** is a high-touch manual service where the customer knows people are involved.

### 05. Cut scope aggressively.
Keep only what is required for the value moment or the learning goal.

Cut by default:
- Login, unless identity is essential.
- Full dashboard, unless the dashboard is the value.
- Integrations, unless integration is the core risk.
- Automation, unless automation is the core risk.

- Complex onboarding, unless onboarding comprehension is the test.
- Permissions, analytics polish, edge cases, scale work, and nice-to-have features.

Michael Seibel gives the operating rule: "Resist the temptation to build your complete solution because in reality you have no idea whether it will work."

### 06. Predefine success and failure.
Before building or launching, define:
- Target customer profile.
- Customer count.
- Timeline.
- Primary metric.

- Secondary metric.
- Success threshold.
- Failure threshold.
- Decision if the test succeeds or fails.

Good success rule:

> At least 3 of 5 target customers complete the workflow twice within 14 days, and at least 2 agree to pay $X/month or continue a paid pilot.

Good failure rule:

> Fewer than 2 customers complete the workflow, or customers only use it when the founder manually reminds them.

### 07. Recruit from committed prospects.
Use people who already showed pain, urgency, access, or willingness to pay. Avoid friends, advisors, and curiosity users unless they match the ICP.

### 08. Run with 3-5 target customers.
Track behavior, not just feedback:
- Activation and time to first value.
- Usage frequency and repeated use.
- Payment, signed agreement, referral, or continued access.
- Founder intervention and manual fulfillment time.

- Workflow breaks, support needs, drop-off, and unexpected value.

### 09. Hold a decision review.
Compare results to the thresholds. Then decide: continue, narrow ICP, change promise, change workflow, change price/package, change delivery model, rebuild the test, or stop.

## Deliverable
Produce an **MVP Test Brief** that the whole founding team and key employees can see before build work starts.

Include:

- **Promise:** the customer, job, outcome, and mechanism.
- **Riskiest assumption:** the one belief this test must resolve.
- **Primary learning goal:** the decision-critical question.
- **Atomic unit of value:** the smallest complete outcome being tested.

- **Test format:** MVP or MVT, and why.
- **Target customer profile:** who will test it.
- **Included scope:** only what is needed for the value moment or learning goal.
- **Excluded scope:** what the team is intentionally not building.

- **Manual work:** what the founder/team will do by hand.
- **Customer count and timeline.**
- **Primary and secondary metrics.**
- **Success and failure thresholds.**

- **Evidence captured:** behavior, outcomes, commitments, friction, and quotes where useful.
- **Decision:** continue, narrow, change, rebuild, or stop.

The brief should prevent accidental overbuilding. If a feature cannot point to the atomic unit of value or the learning goal, it does not belong in this test.

## Exit Criteria
Move forward only when the checklist below is complete.

- One primary learning goal is selected.
- The riskiest assumption is stated in testable language.
- The atomic unit of value is defined.
- The test reaches a real value moment or directly tests a pre-product assumption.

- The team chose MVP vs MVT intentionally.
- Included scope is tied to the value moment or learning goal.
- Excluded scope is explicit.
- Manual work is acceptable for 3-5 customers.

- Success and failure thresholds are set before launch.
- Evidence is behavioral, not just stated interest.
- Results are compared to thresholds.
- A decision is made after review: continue, narrow, change, rebuild, or stop.

- The MVP Test Brief is stored somewhere visible to the founding team and key employees.

## References
| Source | Publisher |
| --- | --- |
| [What is an MVP? Eric Ries Explains](https://leanstartup.co/resources/articles/what-is-an-mvp/) | Eric Ries / Lean Startup Co. |
| [Minimum Viable Product guide](http://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html) | Eric Ries / Startup Lessons Learned |
| [How Dropbox Started As A Minimal Viable Product](https://techcrunch.com/2011/10/19/dropbox-minimal-viable-product/) | Eric Ries / TechCrunch |
| [One Order of Operations for Starting a Startup](https://www.ycombinator.com/blog/one-order-of-operations-for-starting-a-startup/) | Michael Seibel / Y Combinator |
| [Practical Design: MVP Spec](https://www.ycombinator.com/blog/practical-design-mvp/) | Dominika Blackappl / Y Combinator |
| [The Minimum Viable Testing Process for Evaluating Startup Ideas](https://review.firstround.com/the-minimum-viable-testing-process-for-evaluating-startup-ideas/) | Gagan Biyani / First Round Review |
| [Concierge vs. Wizard of Oz MVP](https://blog.logrocket.com/product-management/concierge-wizard-of-oz-mvp/) | LogRocket |
