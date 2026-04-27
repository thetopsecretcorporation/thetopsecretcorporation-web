---
title: "Build the Smallest Useful MVP"
guideNumber: 7
slug: "build-smallest-useful-mvp"
summary: "Design the smallest experiment that lets real customers experience the promised outcome and gives the team a clear decision."
phase: "Delivery"
expectedOutput: "A smallest useful MVP or minimum viable test plan with a learning goal, scope cuts, success criteria, and next decision."
status: draft
draft: false
updatedAt: 2026-04-27
---
## Field Brief
Build the smallest useful experiment that can test whether your promise creates real value for the beachhead customer. Do not build a mini version of the full product. Create validated learning about the riskiest assumption with the least time, money, and complexity.

An MVP is a learning vehicle. It should be small, but small is not enough. It must let a real target customer experience the core promised outcome, or it must test the one assumption that determines whether building the product is worth it.

## Why It Matters
Founders often overbuild before they know what customers truly want. They build dashboards, onboarding, integrations, automation, analytics, permissions, and edge cases before proving that customers care enough to use, pay, switch behavior, or continue.

A good MVP creates learning and delivers the core outcome without unnecessary features, infrastructure, automation, or polish. Before PMF, progress is measured by stronger evidence about the customer, promise, workflow, willingness to pay, delivery model, and market pull.

## Learning Objectives
By the end of this guide, founders should be able to:

| Objective | What founders should produce |
| --- | --- |
| Define the MVP correctly | The smallest useful learning vehicle, not the smallest feature set. |
| Find the riskiest assumption | A clear answer to the question the MVP or test must resolve. |
| Define the atomic unit of value | The smallest complete customer outcome worth testing. |
| Choose the right format | Concierge, Wizard of Oz, manual, no-code, prototype, paid pilot, or narrow software slice. |
| Produce the guide deliverable | An MVP or minimum viable test plan with learning goal, scope cuts, success criteria, and next decision. |

## Core Concepts

### MVP means validated learning, not miniature product
The minimum viable product is the smallest version of the solution that can produce useful evidence about customers. It is not the smallest thing the founder can ship. It is not a partial product with every feature made worse. It is not a prototype that earns compliments but cannot change customer behavior.

The test should answer one important question.

| Risk area | Question the MVP or test should answer |
| --- | --- |
| Urgency | Will the customer urgently want this outcome? |
| Action | Will they take action now rather than someday? |
| Commitment | Will they pay, commit, wait, switch, or invite others? |
| Delivery | Can you deliver the promised outcome manually or with a narrow product slice? |
| Workflow | Does the solution fit the customer's real workflow? |
| Channel | Can you reach this customer through the expected channel? |
| Economics | Can the eventual business deliver the outcome at an acceptable cost? |

If the test does not reduce one of these risks, it is probably not the right MVP.

### Minimum Viable Test vs. Minimum Viable Product
Sometimes the right next step is not an MVP. It is a Minimum Viable Test: a smaller experiment designed to test one assumption before product work begins.

| Use this | When the main risk is | Example formats |
| --- | --- | --- |
| Minimum Viable Test | Demand, willingness to pay, channel access, comprehension, operational feasibility, or pricing | Sales call, paid pre-order, letter of intent, landing page, fake-door test, demo video, quoted proposal, manual service, or technical spike |
| Minimum Viable Product | Customers need to experience the core solution end-to-end in order to create valid evidence | Manual workflow, no-code workflow, concierge delivery, Wizard of Oz experience, or narrow software slice |

The MVP can still be manual, no-code, concierge, or Wizard of Oz. What matters is that the customer reaches the promised outcome and the founder learns whether the business hypothesis is true.

### The atomic unit of value
The atomic unit of value is the smallest complete outcome the customer receives. It is the first indivisible moment where the customer can say, "That helped."

| Product type | Atomic unit of value |
| --- | --- |
| Online bookstore | Buying and receiving one book. |
| Search engine | Completing one useful search query. |
| Billing-audit product | Finding one recoverable billing error. |
| Hiring tool | Producing one qualified candidate shortlist. |

The atomic unit is the best scoping tool. Build only what is required to deliver or test that unit once for one right-fit customer, then repeat with a few more customers.

### Useful does not mean complete
An MVP should be narrow, but it should not be broken. A fake-looking, confusing, or incomplete flow can create false negatives because customers never reach the value moment.

Useful means the customer understands the promise, attempts the real workflow, receives the core outcome, and creates evidence the founder can use to make a continue, change, or stop decision.

## Recommended Exercise

### 01. Write the value promise
Use one sentence:

> For [specific beachhead customer], this MVP helps them [specific job or outcome] by [mechanism].

Reject vague promises like "save time," "improve productivity," or "AI assistant" unless they are tied to a concrete workflow and result.

### 02. Identify the riskiest assumption
List the assumptions that could kill the business, then choose one primary learning goal for this test.

| Risk type | What could kill the business |
| --- | --- |
| Demand | Customers do not urgently want the outcome. |
| Commitment | Customers like the idea but will not pay or commit. |
| Workflow | Customers cannot fit the solution into their workflow. |
| Delivery | The promised outcome cannot be delivered reliably. |
| Channel | The channel cannot reach the beachhead customer. |
| Economics | Manual delivery costs too much to become a business. |
| Retention | The product is understandable but not valuable enough to repeat. |

Write the primary learning goal in a testable form:

> We need to learn whether [specific customer] will [specific behavior] when offered [specific outcome] through [specific MVP/test format].

### 03. Define the atomic unit of value
Document the smallest complete customer outcome in a compact test brief.

| Field | Prompt |
| --- | --- |
| Customer job | What job is the customer trying to complete? |
| Completed outcome | What is the smallest result that counts as value? |
| Value moment | When does the customer know it worked? |
| Meaningful test | What must happen once for the test to matter? |
| Manual work | What can the founder do behind the scenes? |
| Proof of value | What customer behavior would show the outcome matters? |

### 04. Choose the simplest valid test format
Choose the format based on the risk being tested.

| Risk being tested | Useful formats |
| --- | --- |
| Demand risk | Landing page, waitlist, sales call, demo video, paid pre-order, letter of intent, or fake-door test. |
| Value or outcome risk | Concierge service, paid pilot, done-for-you manual workflow, or narrow software slice. |
| Workflow or behavior risk | Wizard of Oz MVP, clickable prototype plus observed task completion, or product-like front end with manual backend. |
| Feasibility risk | Technical spike, manual operations trial, or narrow automated component. |
| Pricing or profit risk | Paid pilot, quoted proposal, or manual fulfillment with cost tracking. |

Concierge MVPs expose the human service and maximize discovery. Wizard of Oz MVPs present a product-like experience while the founder performs work manually behind the scenes. Both are valid when they produce real customer behavior and learning.

### 05. Cut scope aggressively
Use these rules:

1. If the customer can receive the core promised outcome without the feature, cut it.
2. If the team can do it manually for 3-5 customers, do it manually.
3. If the test result would not change the next decision, do not build it.
4. If the feature supports scale before value is proven, cut it.
5. If the feature exists mainly to make the product feel complete, cut it.

Use a scope-cut matrix to keep the MVP honest.

| Usually cut | Keep only if... |
| --- | --- |
| Login system | Identity is essential to the test. |
| Full dashboard | The dashboard is the core value. |
| Integrations | Integration is the core risk. |
| Automation | Automation is the core risk. |
| Complex onboarding | Onboarding comprehension is the test. |
| Permissions and team management | Multi-user control is required for the workflow. |
| Analytics polish | The customer outcome depends on the analytics view. |
| Edge cases | The edge case is common for the beachhead customer. |
| Scale and infrastructure work | Scale is the hypothesis being tested. |
| Nice-to-have features | The feature is required to reach the value moment. |

### 06. Predefine success and failure
Before building or launching, define the test boundaries.

| Boundary | What to specify |
| --- | --- |
| Audience | Target customer profile and customer count. |
| Time box | Timeline for the test. |
| Metrics | Primary metric and secondary metric. |
| Thresholds | Minimum success threshold and failure threshold. |
| Decisions | Next decision if the test succeeds or fails. |

Favor behavioral evidence over stated interest. Stronger signals include payment, repeated use, completed workflow, measurable customer outcome, referral, renewal, signed contract, signed LOI, or continued use after founder handholding is reduced.

A good success rule is specific:

> At least 3 of 5 target customers complete the workflow twice within 14 days, and at least 2 agree to pay $X/month or continue a paid pilot.

A good failure rule is also specific:

> Fewer than 2 customers complete the workflow, or customers only use it when the founder manually reminds them.

### 07. Recruit from committed prospects
Use prospects from earlier PMF Field Guide entries who already showed pain, urgency, commitment, or willingness to pay. Avoid friends, advisors, and curiosity users unless they match the beachhead customer.

Good first MVP users have usually done at least one of the following:

| Signal | What it shows |
| --- | --- |
| Described the pain in concrete terms | The problem is real and specific. |
| Tried a workaround | The pain is active enough to create behavior. |
| Agreed to a follow-up | There is enough interest to continue. |
| Shared data, workflow access, or stakeholder time | They are investing real effort. |
| Committed money, authority, reputation, or operational access | The test has consequence. |
| Asked when they can try the solution | Pull is starting to appear. |

### 08. Run the MVP with 3-5 customers
Track behavior, not just feedback. Use one operating log per customer so the team can compare patterns after the test.

| Category | Record |
| --- | --- |
| Activation | Whether the customer started, how long it took, and where they got stuck. |
| Usage | Frequency, repeated use, time-to-value, and customer effort required. |
| Commitment | Payment, signed agreement, continued access, referral, or other meaningful commitment. |
| Delivery load | Founder intervention, manual fulfillment time, support needs, and operational bottlenecks. |
| Friction | Workflow breaks, workarounds, unexpected value, and reasons for drop-off. |

Customer quotes are useful context, but behavior is stronger evidence than compliments.

### 09. Hold a decision review
Compare results to the precommitted success and failure thresholds. Decide what happens before the next cohort.

| Decision | Use it when... |
| --- | --- |
| Continue with the same scope | The evidence meets the success threshold and the workflow is learnable. |
| Narrow the ICP | Some customers show strong pull while others do not. |
| Change the promise | The customer wants a different outcome than expected. |
| Change the workflow | The value is real but the path to it is too hard. |
| Change the price or packaging | The value is real but the commercial model is wrong. |
| Change the delivery model | The value is real but the current delivery approach will not work. |
| Rebuild the test | The test failed to create valid evidence. |
| Stop | The target customer does not show enough pull to continue. |

Do not let the MVP become an open-ended pilot with no decision date.

## Evidence Hierarchy
Use this hierarchy when interpreting results.

| Strength | Evidence | How to read it |
| --- | --- | --- |
| Strong | Paid usage, repeated usage, renewal or expansion, referral, signed contract, purchase order, scoped LOI, measurable customer outcome, or continued use after founder handholding decreases. | The customer is showing behavior with consequence. |
| Medium | Unpaid but repeated usage by right-fit customers, completed workflow, qualified high-intent waitlist, stakeholder time, data access, operational access, or prototype task completion for comprehension/workflow tests. | The signal is meaningful but needs more consequence. |
| Weak | Positive feedback, survey interest, advisor enthusiasm, friends saying they would use it, prototype clicks without consequence, or vanity metrics from unqualified users. | The signal may feel encouraging but should not drive a build decision alone. |

## Examples

**Dropbox demo video:** Dropbox did not need a fully working public product to test whether early adopters understood and wanted the experience. A demo video produced a major increase in signups, which was useful demand evidence for that stage.

**Zappos-style manual fulfillment:** A founder can test whether people will buy shoes online before building warehouses or logistics infrastructure by manually sourcing and fulfilling orders. The value test comes before the scalable system.

**Concierge workflow:** A founder building an AI claims-audit product might manually review claims for 3 clinics and deliver a weekly report. If clinic managers find recoverable errors and pay to continue, the founder has stronger evidence than a dashboard mockup would provide.

**Wizard of Oz workflow:** A founder might show customers a product-like interface for generating candidate shortlists while manually producing the shortlists behind the scenes. This tests whether customers value the experience before the matching engine is automated.

## Guide Deliverable
A smallest useful MVP or minimum viable test plan, followed by results from 3-5 target customers when available.

| Deliverable section | Include |
| --- | --- |
| Promise and risk | Value promise, riskiest assumption, primary learning goal, and atomic unit of value. |
| Test design | MVP or test format, target customer profile, included scope, explicitly excluded scope, and manual work the founder will perform. |
| Measurement | Customer count, timeline, primary metric, secondary metric, success threshold, and failure threshold. |
| Evidence and decision | Evidence captured and the next decision: continue, narrow, change, rebuild, or stop. |

## References
| Source | Publisher |
| --- | --- |
| [What is an MVP" Eric Ries Explains](https://leanstartup.co/resources/articles/what-is-an-mvp/) | Eric Ries / Lean Startup Co. |
| [Minimum Viable Product guide](http://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html) | Eric Ries / Startup Lessons Learned |
| [The Lean Startup Principles](https://theleanstartup.com/principles) | Lean Startup Co. |
| [How Dropbox Started As A Minimal Viable Product](https://techcrunch.com/2011/10/19/dropbox-minimal-viable-product/) | Eric Ries / TechCrunch |
| [One Order of Operations for Starting a Startup](https://www.ycombinator.com/blog/one-order-of-operations-for-starting-a-startup/) | Michael Seibel / Y Combinator |
| [Practical Design: MVP Spec](https://www.ycombinator.com/blog/practical-design-mvp/) | Dominika Blackappl / Y Combinator |
| [The Minimum Viable Testing Process for Evaluating Startup Ideas](https://review.firstround.com/the-minimum-viable-testing-process-for-evaluating-startup-ideas/) | Gagan Biyani / First Round Review |
| [Startup Playbook](https://playbook.samaltman.com/) | Sam Altman |
| [The only thing that matters](https://pmarchive.com/guide_to_startups_part4.html) | Marc Andreessen |
| [Concierge vs. Wizard of Oz MVP](https://blog.logrocket.com/product-management/concierge-wizard-of-oz-mvp/) | LogRocket |
