---
title: "The AI Agent Stack Is Splitting. That Changes Where the Value Will Go."
summary: "The next winners in AI may not be the companies with the best model. They may be the ones that own memory, orchestration, tooling, and the runtime that turns intelligence into reliable work."
publishDate: "2026-04-08"
author: "Albert"
tags:
  - research
  - ai
  - agents
  - orchestration
  - memory
  - infrastructure
  - strategy
---

## The model is no longer the whole product

The market is still talking about AI agents like the model is the product. It isn’t.

That framing made sense when generative AI was mostly about answering questions, summarizing documents, and drafting copy. In that world, model quality was the headline variable.

That world is fading.

Once an AI system is expected to do real work, the model becomes one part of the equation. A useful agent has to remember context, use tools, recover from failures, hand work off correctly, respect permissions, and know when to pause for a human. That is not just a model problem. It is a systems problem.

That is why the AI agent market is starting to split into distinct layers.

Models still matter. But the real battleground is moving toward the surrounding stack: memory, tool access, orchestration, and governance. The question is no longer just who has the best model. It is who can build the most dependable digital worker and prove it under real operating conditions.

## The short version

The model is becoming necessary infrastructure.

The differentiator is moving up the stack.

That changes the shape of the market. The companies most likely to capture durable value in AI may not be the ones with the single best benchmark score. They may be the ones that own the runtime, the memory layer, the orchestration logic, the connector ecosystem, or the governance surface that makes autonomous systems usable in the real world.

## The stack is splitting

Across the market, the same pattern keeps showing up.

The model handles reasoning. Memory holds context. Tools let the system reach software and data. Orchestration manages sequencing, retries, approvals, routing, and recoverability.

That split is not theoretical. It is already visible in the products shipping right now.

OpenAI’s Responses API now bundles built-in tools like web search, file search, computer use, Code Interpreter, and remote MCP servers. Anthropic has pushed hard on the connective tissue around the model with Model Context Protocol, MCP connector, Tool Search Tool, and Programmatic Tool Calling. Google is building toward a managed lifecycle with Agent Development Kit, Agent Garden, Vertex AI Agent Engine, Memory Bank, Evaluation Layer, and native agent identities. Microsoft’s Agent Framework merges ideas from AutoGen and Semantic Kernel into graph-based workflows with checkpointing, A2A, MCP, session state, and human-in-the-loop patterns. Open-source leaders like LangGraph and CrewAI are moving the same way, competing less on prompt abstractions and more on durability, persistence, flows, state, interrupts, observability, and memory.

The pattern is clear. The industry is reorganizing around the runtime, not just the reasoning engine.

## Where value moves

The most important change here is economic.

For the last two years, it was easy to assume the durable value in AI would sit mostly in the model layer. If one company had the smartest system, it would capture the most value.

That assumption is getting weaker.

As frontier models converge on strong reasoning, multimodality, tool use, and lower inference costs, raw model quality becomes less sufficient as a standalone moat. The harder problem is no longer getting a model to produce an impressive response. The harder problem is getting a system to complete work reliably over time.

That means value starts shifting toward the layers that make agents usable in production:

- memory that preserves context and compounds usefulness
- orchestration that makes workflows durable and recoverable
- tooling that connects agents to fragmented systems
- governance that makes autonomy safe enough to deploy

This is the deeper story underneath the current agent wave. The market is moving from intelligence as output to intelligence as operations.

## The four layers

### Models

Models still matter. They reason, generate, interpret, decide, and synthesize. Weak reasoning upstream still creates fragile execution downstream.

But the role of the model is changing. It is increasingly becoming one layer inside a managed runtime rather than the application itself.

OpenAI’s Responses API treats tool use as part of the core interaction flow. Anthropic has expanded Claude’s tool use with code execution and large-scale tool access. Google positions Gemini inside a broader agent lifecycle through ADK and Vertex AI rather than as a standalone endpoint.

The model is still the brain. It is just no longer the whole organism.

### Memory

Early agents had a simple problem: they forgot everything.

Users had to restate goals, re-upload documents, repeat preferences, and re-establish context every time. Fine for demos. Bad for real work.

That is why memory is becoming strategic. Google’s Vertex AI Agent Engine includes sessions and Memory Bank. LangGraph persists state through a checkpointer so threads can resume later. CrewAI exposes memory directly inside Flows. Microsoft Agent Framework includes thread and session state management plus context providers for memory.

Memory does more than improve the experience. It compounds utility over time.

An agent that remembers your internal vocabulary, approval paths, recurring tasks, and prior decisions becomes harder to replace. That makes memory valuable. It also raises harder questions around retention, portability, auditability, and ownership.

### Tools

Without tools, an AI system mostly talks.

With tools, it can act.

This layer now includes APIs, remote connectors, code execution, retrieval systems, browser automation, and computer-use interfaces. OpenAI has made computer use and remote MCP servers first-class tools. Anthropic has made MCP connector part of its API and added Tool Search Tool and Programmatic Tool Calling for large tool libraries. Google emphasizes MCP support, Grounding with Google Search, Vertex AI Search, Code Execution, 100+ pre-built connectors, and enterprise connections via Apigee and OpenAPI-managed APIs. Microsoft highlights OpenAPI, MCP, and A2A interoperability.

This matters because high-value workflows are rarely neatly packaged. They live in fragmented software, legacy tools, dashboards, inboxes, PDFs, and systems no one designed for agents. The tool layer is what lets AI cross that gap.

### Orchestration

This is where the serious moat may be forming.

It is also the layer the market still tends to underrate.

Orchestration determines what happens next. It decides how work is sequenced, what state gets preserved, what gets retried, where approval is required, how handoffs work, and what happens when the system is interrupted halfway through a task.

This is where the stack is splitting most clearly.

LangGraph is explicit about it, with state graphs, checkpointers, durable execution, and interrupts built around pause-and-resume workflows. CrewAI’s Flows emphasize event-driven workflows, shared state, conditional routing, persistence, and restart recovery. Microsoft Agent Framework supports graph-based workflows with sequential, concurrent, handoff, and group chat patterns plus streaming, checkpointing, and human-in-the-loop support. Google’s ADK and Agent Builder continue adding orchestration controls, traces, evaluation, user simulation, and pause-resume workflow management.

If the model is the brain, orchestration is the operating logic. It is what makes the system dependable enough to trust.

## Why orchestration matters most

This may be the most important shift in the whole stack.

Nearly every serious platform is adding the same categories of features: persistence, workflow control, checkpoints, interrupts, traces, evaluations, approvals, and interoperability.

That kind of convergence usually means the market has found the real bottleneck.

And the bottleneck is no longer primarily linguistic. It is operational.

Agents fail in ways benchmarks barely capture. They lose state between steps. They call the right tool with the wrong parameters. They repeat side effects after a crash. They hand work to the wrong specialist. They claim something completed when the downstream system failed. They produce an answer with no audit trail. They succeed in a way no one can safely verify later.

A better model alone does not solve any of that.

That is why LangGraph’s documentation sounds less like chatbot marketing and more like workflow engineering. CrewAI now foregrounds state checkpointing, persistence providers, event systems, and observability integrations. Google is expanding traces, Evaluation Layer, User Simulator, agent identities, and memory because production agents require more than access to a strong model. Microsoft frames Agent Framework as a runtime for orchestrating multi-agent systems with durability, compliance, and observability built in.

This is why orchestration looks increasingly strategic. It is the layer where autonomy becomes safe, inspectable, and commercially usable. It is also the layer where switching costs can quietly rise once workflows, approvals, traces, and memory schemas are embedded in a given runtime.

A company may think it is buying model access and later realize it has standardized on a workflow operating system.

## What the majors are building

### OpenAI

OpenAI is moving from model API to agent runtime.

The Responses API is now a unified primitive for agentic applications, with built-in tools such as web search, file search, computer use, Code Interpreter, and remote MCP servers. OpenAI also emphasizes stateful conversations through `store: true` and `previous_response_id`, along with tool invocation and semantic events inside reasoning flows.

The important point is not that OpenAI has tools. It is that OpenAI is building an execution environment around the model.

### Anthropic

Anthropic may be making the most important protocol play.

Anthropic’s most consequential move may be less Claude itself and more the infrastructure around Claude. MCP is a bid to standardize how agents connect to external systems. Anthropic later added MCP connector to its API so developers could connect remote MCP servers without custom client harnesses. It then introduced Tool Search Tool and Programmatic Tool Calling to help Claude discover and use large tool libraries without consuming excessive context.

If the ecosystem standardizes around a protocol Anthropic helped define, Anthropic gains leverage over the connective tissue of the stack, not just one model endpoint within it.

### Google

Google is building for the full lifecycle.

Google’s strategy is broad and explicit. Agent Development Kit is for building multi-agent systems with orchestration controls, model flexibility, MCP support, pre-built tools, and streaming. Agent Garden provides reusable samples and tools. Vertex AI Agent Engine provides the managed runtime. Subsequent updates added traces, playground, Evaluation Layer, User Simulator, agent identities, sessions, memory bank, and ApiRegistry for governed tool access.

Google is not treating agents like prompt wrappers. It is treating them like systems that need to be built, deployed, monitored, and governed.

### Microsoft

Microsoft is turning enterprise orchestration into a product category.

Microsoft’s Agent Framework combines the research lineage of AutoGen with the enterprise foundation of Semantic Kernel. It supports graph-based workflows, checkpointing, human-in-the-loop, A2A, MCP, OpenAPI connectivity, session and thread state, middleware, and telemetry.

Microsoft’s likely advantage is not just model capability. It is that enterprise workflow, identity, compliance, and distribution have always been Microsoft terrain. In that environment, orchestration is a natural place to win.

### LangGraph

LangGraph is selling reliability.

LangGraph’s role in the open ecosystem is increasingly clear. It is an orchestration framework for teams that care about durable, stateful, inspectable workflows. Its key primitives include durable execution, checkpointer-based persistence, interrupts, thread IDs, and resumability over long-running tasks. LangChain’s Deep Agents materials make the same point: once agents become long-running and subagent-heavy, they cannot be treated like one-shot chat sessions.

That may not be flashy. It is exactly what production systems need.

### CrewAI

CrewAI is making orchestration easier to adopt.

CrewAI has taken a more accessible route, but it is moving toward the same destination. Its platform centers on agents, crews, and Flows, with guardrails, memory, knowledge, and observability built in. Flows are event-driven, stateful, persistent, and restartable. Memory is exposed directly in workflows. Observability and evaluation are treated as part of the product, not as afterthoughts.

That makes CrewAI notable for a simple reason: it lowers the barrier to orchestration while still moving toward real runtime primitives.

## The takeaway

The AI market is not just racing toward better models.

It is reorganizing around systems that can turn model intelligence into reliable action.

That means the next durable winners may not be the companies with the single strongest benchmark result. They may be the companies that own the runtime, the workflow engine, the memory layer, the tool protocol, the governance surface, or the connector ecosystem around the model.

That is the real shift underway.

The model is becoming necessary infrastructure. The stack around it is becoming the product.

That does not make model quality irrelevant. It makes model quality insufficient on its own.

And once that becomes true, the center of gravity in AI shifts fast.

## What to watch

Instead of asking only which model is smartest, ask:

- Where does this company sit in the stack?
- Does it own reasoning, memory, tool access, orchestration, or governance?
- Can the system preserve state, recover from interruption, and support approvals?
- Does it leave traces, evaluations, and auditability behind?
- Is the advantage coming from model quality, workflow reliability, ecosystem leverage, or switching costs created by persistent context?

Those questions are closer to where the real value is moving.

## Sources

### OpenAI
- [Migrate to the Responses API](https://platform.openai.com/docs/guides/migrate-to-responses)
- [Responses vs Chat Completions](https://platform.openai.com/docs/guides/responses-vs-chat-completions?api-mode=responses)
- [New tools and features in the Responses API](https://openai.com/index/new-tools-and-features-in-the-responses-api/)

### Anthropic
- [Four new capabilities](https://www.anthropic.com/news/agent-capabilities-api)
- [Introducing advanced tool use on the Claude Developer Platform](https://www.anthropic.com/engineering/advanced-tool-use)
- [Code execution with MCP: building more efficient AI agents](https://www.anthropic.com/engineering/code-execution-with-mcp)

### Google
- [Agent Development Kit: Making it easy to build multi-agent applications](https://developers.googleblog.com/en/agent-development-kit-easy-to-build-multi-agent-applications/)
- [Build and manage multi-system agents with Vertex AI](https://cloud.google.com/blog/products/ai-machine-learning/build-and-manage-multi-system-agents-with-vertex-ai)
- [More ways to build and scale AI agents with Vertex AI Agent Builder](https://cloud.google.com/blog/products/ai-machine-learning/more-ways-to-build-and-scale-ai-agents-with-vertex-ai-agent-builder)
- [New enhanced tool governance in Vertex AI Agent Builder](https://cloud.google.com/blog/products/ai-machine-learning/new-enhanced-tool-governance-in-vertex-ai-agent-builder)

### Microsoft
- [Introducing Microsoft Agent Framework](https://azure.microsoft.com/en-us/blog/introducing-microsoft-agent-framework/)
- [Migrate your Semantic Kernel and AutoGen projects to Microsoft Agent Framework Release Candidate](https://devblogs.microsoft.com/agent-framework/migrate-your-semantic-kernel-and-autogen-projects-to-microsoft-agent-framework-release-candidate/)
- [Introduction to Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview)

### LangChain / LangGraph
- [Durable execution](https://docs.langchain.com/oss/python/langgraph/durable-execution)
- [Interrupts](https://docs.langchain.com/oss/python/langgraph/interrupts)
- [Memory overview](https://docs.langchain.com/oss/javascript/langgraph/memory)
- [Going to production (Deep Agents)](https://docs.langchain.com/oss/javascript/deepagents/going-to-production)

### CrewAI
- [Documentation](https://docs.crewai.com)
- [Flows](https://docs.crewai.com/en/concepts/flows)
- [Observability overview](https://docs.crewai.com/en/observability/overview)
- [Changelog](https://docs.crewai.com/en/changelog)
