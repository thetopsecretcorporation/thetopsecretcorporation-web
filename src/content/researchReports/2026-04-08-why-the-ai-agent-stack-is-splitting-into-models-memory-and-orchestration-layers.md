---
title: "Why the AI Agent Stack Is Splitting Into Models, Memory, and Orchestration Layers"
summary: "A research report on why AI competition is shifting away from model quality alone and toward the stack layers that make agents reliable, stateful, governable, and commercially defensible."
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

## Executive Summary

The market narrative around AI agents is still too model-centric. Many buyers, founders, and operators continue to evaluate agent products as if the core question were simply which model is smartest. That framing is already breaking down. In practice, production-grade agent systems are increasingly being assembled from distinct layers: models for reasoning and generation, memory for retaining context and facts over time, tool and browser access for acting on software and data, and orchestration for sequencing work, handling failures, routing between agents, and inserting human approval where autonomy becomes risky.

This matters because the economic value in AI is beginning to redistribute. The model layer will remain important, but it is becoming less sufficient as a standalone moat. As vendors converge on strong reasoning, multimodality, tool use, and lower inference costs, the harder commercial problem is not whether a model can answer a question, but whether a system can reliably complete work over time across tools, memory, controls, and recoverability.

The leading platforms are already signaling this shift with concrete product design choices. OpenAI’s **Responses API** bundles built-in tools such as **web search**, **file search**, **computer use**, **Code Interpreter**, and **remote MCP servers**, explicitly positioning the API as the basis for agent-like applications rather than simple text generation [OpenAI, 2025](https://platform.openai.com/docs/guides/migrate-to-responses); [OpenAI, 2025](https://openai.com/index/new-tools-and-features-in-the-responses-api/). Anthropic has pushed **Model Context Protocol (MCP)**, **MCP connector**, **Tool Search Tool**, and **Programmatic Tool Calling** as ways to connect models to large tool ecosystems without flooding context windows [Anthropic, 2025](https://www.anthropic.com/news/agent-capabilities-api); [Anthropic, 2025](https://www.anthropic.com/engineering/advanced-tool-use). Google has built out **Agent Development Kit (ADK)**, **Agent Garden**, **Vertex AI Agent Engine**, **Memory Bank**, **Evaluation Layer**, and **native agent identities** to move agents from prototype to governed production systems [Google, 2025](https://developers.googleblog.com/en/agent-development-kit-easy-to-build-multi-agent-applications/); [Google Cloud, 2025](https://cloud.google.com/blog/products/ai-machine-learning/build-and-manage-multi-system-agents-with-vertex-ai); [Google Cloud, 2025](https://cloud.google.com/blog/products/ai-machine-learning/more-ways-to-build-and-scale-ai-agents-with-vertex-ai-agent-builder). Microsoft’s **Agent Framework** merges ideas from **AutoGen** and **Semantic Kernel** into graph-based workflows with **checkpointing**, **A2A**, **MCP**, **session and thread state**, and human-in-the-loop patterns [Microsoft, 2026](https://devblogs.microsoft.com/agent-framework/migrate-your-semantic-kernel-and-autogen-projects-to-microsoft-agent-framework-release-candidate/); [Microsoft Learn, 2025](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview). Open-source leaders such as **LangGraph** and **CrewAI** are likewise competing less on raw prompt abstractions and more on durability, persistence, interrupts, flows, state management, observability, and memory [LangChain, 2026](https://docs.langchain.com/oss/python/langgraph/durable-execution); [LangChain, 2026](https://docs.langchain.com/oss/python/langgraph/interrupts); [CrewAI Docs, 2026](https://docs.crewai.com/en/concepts/flows); [CrewAI Docs, 2026](https://docs.crewai.com/en/observability/overview).

The strategic implication is straightforward: the next battleground in AI is not just model performance, but system reliability and control. The question shifts from who has the best model to who can build the most dependable digital worker. The winners may not be the companies with the single strongest benchmark. They may be the companies that best combine models, memory, orchestration, governance, and tool ecosystems into coherent, inspectable systems.

## Key Findings

- The market is moving beyond the idea that one strong model is the whole product.
- The stack is separating into distinct layers: models, memory, tool access, and orchestration.
- Orchestration is becoming a major value layer because it determines reliability, recoverability, human approval, and workflow control.
- Memory is shifting from convenience feature to strategic moat because persistent context improves usefulness and increases switching costs.
- The major vendors are converging on similar infrastructure patterns: checkpointing, traces, evaluations, connectors, protocol support, and long-running workflow controls.
- Companies that own the runtime, workflow engine, connector standard, or governance layer may capture more durable value than companies competing only on raw model quality.

## Analysis

The first wave of AI adoption encouraged a simplistic mental model: pick the best frontier model, wrap it in a chat interface, add some prompts, and call the result a product. That approach worked when the main job was generating text, summarizing documents, or answering questions. It breaks down once the software is expected to do work.

A system that performs real work has to do more than infer. It has to maintain state, know what happened earlier, call the right tool, recover when a tool fails, ask for approval when stakes are high, and resume later without starting from zero. Those are separate engineering concerns. A model can contribute to them, but it does not replace them.

That is why the language of the market has begun to change from “LLM app” to “agent stack,” “agent runtime,” “memory layer,” “workflow engine,” and “tool protocol.” The shift is visible in product roadmaps across major vendors. OpenAI’s own documentation describes the **Responses API** as a unified interface for building agent-like applications, emphasizing not only models but built-in tools, stateful context, and MCP support [OpenAI, 2025](https://platform.openai.com/docs/guides/migrate-to-responses). Anthropic’s API announcements similarly frame Claude less as a text model and more as a programmable agent platform with **code execution**, **Files API**, **MCP connector**, and prompt caching up to one hour [Anthropic, 2025](https://www.anthropic.com/news/agent-capabilities-api). Google’s ADK launch explicitly targeted **multi-agent applications** and highlighted deterministic orchestration controls, bidirectional streaming, deployment paths, and model flexibility [Google, 2025](https://developers.googleblog.com/en/agent-development-kit-easy-to-build-multi-agent-applications/).

In other words, the market leaders are not behaving as though raw model access is the whole product. They are building operating layers around models.

## The Emerging Stack: Four Layers That Matter

### 01. Model Layer: The Reasoning Engine

This is still the most visible layer. Models generate language, reason over problems, interpret documents and images, decide which tool to call, and synthesize results. A strong model still matters because weak reasoning upstream creates fragile execution downstream.

But the model layer is increasingly becoming only one component in a broader system. OpenAI is embedding tool access directly inside model interactions through the **Responses API**, where tools such as **web_search**, **file_search**, **computer use**, and **Code Interpreter** can be invoked within the same request flow [OpenAI, 2025](https://platform.openai.com/docs/guides/migrate-to-responses); [OpenAI, 2025](https://openai.com/index/new-tools-and-features-in-the-responses-api/). Anthropic has expanded Claude’s tool use with a **code execution tool** and techniques that allow tool access without bloating the context window [Anthropic, 2025](https://www.anthropic.com/news/agent-capabilities-api); [Anthropic, 2025](https://www.anthropic.com/engineering/advanced-tool-use). Google positions Gemini models inside a larger agent lifecycle through ADK and Vertex AI, rather than as standalone endpoints [Google, 2025](https://developers.googleblog.com/en/agent-development-kit-easy-to-build-multi-agent-applications/).

The important shift is conceptual. The model is becoming the reasoning engine inside a managed runtime, not the whole application.

### 02. Memory Layer: The Context Retention System

Memory is where many early agent systems failed. Stateless agents force users to repeat instructions, re-upload documents, restate preferences, and re-establish project context every session. That is tolerable for demos and intolerable for real work.

The newer architectures are trying to solve this in more explicit ways. Google’s **Vertex AI Agent Engine** now includes **sessions** and **Memory Bank**, and Google says those capabilities are moving to general availability for managing both short-term and long-term memory in production workloads [Google Cloud, 2025](https://cloud.google.com/blog/products/ai-machine-learning/new-enhanced-tool-governance-in-vertex-ai-agent-builder). LangGraph treats short-term memory as part of agent state and persists that state via a **checkpointer**, so a thread can be resumed later [LangChain, 2026](https://docs.langchain.com/oss/javascript/langgraph/memory). CrewAI exposes memory directly inside **Flows** with methods such as `remember`, `recall`, and `extract_memories`, and documents persistence across runs [CrewAI Docs, 2026](https://docs.crewai.com/en/concepts/flows). Microsoft Agent Framework includes **agent thread and session state management** and **context providers for agent memory** [Microsoft Learn, 2025](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview).

Memory is not just a user-experience upgrade. It changes switching costs and platform defensibility. An AI system that remembers your company’s internal vocabulary, preferred approval paths, tool permissions, recurring tasks, and prior decisions becomes more valuable over time. That accumulated context can become a practical moat. It also creates governance questions around data ownership, portability, retention, and auditability.

### 03. Tool and Interface Layer: How Agents Reach the World

A model without tools is mostly confined to answering questions. A model with tools can act.

This layer now includes API calls, remote connectors, code execution, retrieval systems, and increasingly browser or computer-use interfaces. OpenAI has elevated **computer use** and **remote MCP servers** into first-class tools within the Responses API [OpenAI, 2025](https://platform.openai.com/docs/guides/migrate-to-responses); [OpenAI, 2025](https://openai.com/index/new-tools-and-features-in-the-responses-api/). Anthropic has made **MCP connector** part of the API and later added **Tool Search Tool** and **Programmatic Tool Calling** to scale access across thousands of tools [Anthropic, 2025](https://www.anthropic.com/news/agent-capabilities-api); [Anthropic, 2025](https://www.anthropic.com/engineering/advanced-tool-use). Google emphasizes MCP support, **Grounding with Google Search**, **Vertex AI Search**, **Code Execution**, **100+ pre-built connectors**, and the ability to connect agents to existing systems via Apigee and OpenAPI-managed APIs [Google Cloud, 2025](https://cloud.google.com/blog/products/ai-machine-learning/build-and-manage-multi-system-agents-with-vertex-ai); [Google Cloud, 2025](https://cloud.google.com/blog/products/ai-machine-learning/new-enhanced-tool-governance-in-vertex-ai-agent-builder). Microsoft Agent Framework highlights OpenAPI, MCP, and A2A interoperability [Microsoft, 2025](https://azure.microsoft.com/en-us/blog/introducing-microsoft-agent-framework/).

This layer matters commercially because many high-value workflows still live in fragmented enterprise software, internal dashboards, PDF-heavy processes, or legacy systems without modern APIs. Tooling and browser access are how agents cross that gap.

### 04. Orchestration Layer: The System That Makes It Reliable

Orchestration is the least understood by the general market and one of the most important in practice. It is the layer that determines what happens next, what state is preserved, what gets retried, who hands off to whom, where human approval is inserted, and how the system recovers after interruptions or failures.

This is where the stack is splitting most visibly.

LangGraph is explicit about this. Its core primitives are **state graphs**, **checkpointers**, **durable execution**, and **interrupts**. Its documentation stresses that workflows can pause for human review, persist state, and resume from their last recorded checkpoint rather than restarting from scratch [LangChain, 2026](https://docs.langchain.com/oss/python/langgraph/durable-execution); [LangChain, 2026](https://docs.langchain.com/oss/python/langgraph/interrupts). CrewAI’s **Flows** pitch event-driven workflow creation, state sharing, conditional routing, persistence, and restart recovery [CrewAI Docs, 2026](https://docs.crewai.com/en/concepts/flows). Microsoft Agent Framework offers **graph-based workflows** with **sequential**, **concurrent**, **handoff**, and **group chat** patterns, plus **streaming**, **checkpointing**, and **human-in-the-loop** support [Microsoft, 2026](https://devblogs.microsoft.com/agent-framework/migrate-your-semantic-kernel-and-autogen-projects-to-microsoft-agent-framework-release-candidate/). Google’s ADK emphasizes multi-agent hierarchy, orchestration controls, and managed deployment through **Agent Engine**, while later Agent Builder updates added **traces**, **Evaluation Layer**, **User Simulator**, and native support for pausing and resuming workflows [Google, 2025](https://developers.googleblog.com/en/agent-development-kit-easy-to-build-multi-agent-applications/); [Google Cloud, 2025](https://cloud.google.com/blog/products/ai-machine-learning/more-ways-to-build-and-scale-ai-agents-with-vertex-ai-agent-builder).

If the model is the brain, orchestration is closer to the operating logic of the system. It decides how work is sequenced, observed, corrected, and completed.

## Why Orchestration Is Becoming the New Value Layer

The clearest sign that orchestration is becoming strategic is that nearly every serious vendor is adding the same categories of features: persistence, workflow control, checkpoints, interrupts, traces, evaluations, and interoperability.

That is not cosmetic convergence. It reflects a common discovery: once agents start doing multi-step work, the failure modes are operational, not merely linguistic.

An agent can fail because it loses state between steps. It can call the right tool with the wrong parameters. It can re-run side effects after a crash. It can hand off to the wrong specialist agent. It can hallucinate that an action completed when the downstream system silently failed. It can complete the work but leave no audit trail. It can make a correct action impossible to verify later. None of those problems are solved by a slightly better prose model alone.

LangGraph’s documentation is unusually direct about this issue. Its **durable execution** guidance focuses on replay, determinism, side effects, checkpointing modes, and recoverability after failures or week-long pauses [LangChain, 2026](https://docs.langchain.com/oss/python/langgraph/durable-execution). That is the language of workflow engines, not chatbots. CrewAI similarly now surfaces runtime state checkpointing, persistence providers, event systems, and observability integrations in its docs and changelog [CrewAI Docs, 2026](https://docs.crewai.com/en/concepts/flows); [CrewAI Docs, 2026](https://docs.crewai.com/en/changelog). Google is expanding **traces**, **playground**, **Evaluation Layer**, **User Simulator**, **agent identities**, and **memory** in Vertex AI Agent Builder because getting agents into production requires more than model access [Google Cloud, 2025](https://cloud.google.com/blog/products/ai-machine-learning/more-ways-to-build-and-scale-ai-agents-with-vertex-ai-agent-builder). Microsoft explicitly frames Agent Framework as a runtime for orchestrating multi-agent systems with durability, compliance, and observability [Microsoft, 2025](https://azure.microsoft.com/en-us/blog/introducing-microsoft-agent-framework/).

This is why orchestration is likely to capture disproportionate value. It is where autonomy becomes dependable enough for business use. It is also where vendor lock-in can quietly increase, because once workflows, approvals, traces, and memory schemas are embedded in an orchestration layer, switching becomes materially harder.

## Concrete Company Examples: What the Major Players Are Actually Building

### OpenAI: From Model API to Agent Runtime

OpenAI’s product direction is increasingly stack-oriented rather than endpoint-oriented. The **Responses API** is presented as a unified primitive for agentic applications and includes built-in tools such as **web search**, **file search**, **computer use**, **Code Interpreter**, and **remote MCP servers** [OpenAI, 2025](https://platform.openai.com/docs/guides/migrate-to-responses); [OpenAI, 2025](https://openai.com/index/new-tools-and-features-in-the-responses-api/). OpenAI also emphasizes **stateful conversations** using `store: true` and `previous_response_id`, plus semantic events and tool invocation in reasoning flows [OpenAI, 2025](https://platform.openai.com/docs/guides/responses-vs-chat-completions?api-mode=responses).

The key takeaway is that OpenAI is not just selling intelligence. It is building a runtime where intelligence can search, retrieve, inspect files, and act through tools in a single integrated flow.

### Anthropic: Owning the Tool Protocol Layer

Anthropic’s most strategically important move may be less Claude itself and more the infrastructure around Claude. **MCP**, introduced in late 2024 and rapidly adopted across the ecosystem, is Anthropic’s attempt to standardize how agents connect to external systems [Anthropic, 2025](https://www.anthropic.com/engineering/code-execution-with-mcp). Anthropic later added **MCP connector** to its API, so developers could connect remote MCP servers without building custom client harnesses [Anthropic, 2025](https://www.anthropic.com/news/agent-capabilities-api). It then introduced **Tool Search Tool** and **Programmatic Tool Calling**, specifically to help Claude discover and use large tool libraries without consuming excessive context [Anthropic, 2025](https://www.anthropic.com/engineering/advanced-tool-use).

That is a significant architectural play. If the industry standardizes around the protocol Anthropic introduced, Anthropic gains influence over the connective tissue of the agent ecosystem, not just one model endpoint within it.

### Google: Full Lifecycle Control From Build to Govern

Google’s strategy is broad and explicitly lifecycle-oriented. **Agent Development Kit (ADK)** is designed for building multi-agent systems with orchestration controls, model flexibility, MCP support, pre-built tools, and bidirectional streaming [Google, 2025](https://developers.googleblog.com/en/agent-development-kit-easy-to-build-multi-agent-applications/). **Agent Garden** provides reusable samples and tools. **Vertex AI Agent Engine** provides the managed runtime. Later updates expanded the platform with **traces**, **playground**, **Evaluation Layer**, **User Simulator**, **agent identities**, **sessions**, **memory bank**, and **ApiRegistry** for governed tool access [Google Cloud, 2025](https://cloud.google.com/blog/products/ai-machine-learning/build-and-manage-multi-system-agents-with-vertex-ai); [Google Cloud, 2025](https://cloud.google.com/blog/products/ai-machine-learning/more-ways-to-build-and-scale-ai-agents-with-vertex-ai-agent-builder); [Google Cloud, 2025](https://cloud.google.com/blog/products/ai-machine-learning/new-enhanced-tool-governance-in-vertex-ai-agent-builder).

Google is effectively saying that an agent platform must cover build, scale, and govern. That is a far more mature view than treating agents as prompt wrappers.

### Microsoft: Enterprise Orchestration as a First-Class Product

Microsoft’s **Agent Framework** unifies the research lineage of **AutoGen** with the enterprise developer foundation of **Semantic Kernel** [Microsoft Learn, 2025](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview); [Microsoft, 2025](https://azure.microsoft.com/en-us/blog/introducing-microsoft-agent-framework/). It supports **graph-based workflows**, **checkpointing**, **human-in-the-loop**, **A2A**, **MCP**, OpenAPI connectivity, session and thread state, middleware, and telemetry [Microsoft, 2026](https://devblogs.microsoft.com/agent-framework/migrate-your-semantic-kernel-and-autogen-projects-to-microsoft-agent-framework-release-candidate/).

Microsoft’s differentiation is not that it has one radically different model philosophy. It is that it knows enterprise software distribution, identity, governance, and workflow tooling unusually well. In that context, orchestration is a natural control point.

### LangGraph: Reliability as a Product Feature

LangGraph’s position in the open ecosystem is increasingly clear: it is a control-heavy orchestration framework for people who want stateful, durable, and inspectable agent workflows. Its standout features are **durable execution**, **checkpointer-based persistence**, **interrupts**, **thread IDs**, and long-running resumability [LangChain, 2026](https://docs.langchain.com/oss/python/langgraph/durable-execution); [LangChain, 2026](https://docs.langchain.com/oss/python/langgraph/interrupts). LangChain’s newer **Deep Agents** materials further emphasize that long-running agents need persistence and resumability because subagent-heavy tasks cannot be treated like one-shot chats [LangChain, 2026](https://docs.langchain.com/oss/javascript/deepagents/going-to-production).

This is not glamorous product marketing. It is exactly what matters when an agent is doing work that cannot be lost.

### CrewAI: Accessibility Plus Structured Flows

CrewAI has leaned into a more accessible developer experience while still moving toward production primitives. Its documentation frames the platform around **agents**, **crews**, and **Flows**, with **guardrails**, **memory**, **knowledge**, and **observability** built in [CrewAI Docs, 2026](https://docs.crewai.com). **Flows** are event-driven, stateful, persistent, and restartable; memory is available directly inside flows; and the platform includes integrations for tracing, monitoring, and evaluation [CrewAI Docs, 2026](https://docs.crewai.com/en/concepts/flows); [CrewAI Docs, 2026](https://docs.crewai.com/en/observability/overview).

CrewAI’s appeal is that it lowers the barrier to orchestrating role-based systems, but it is no longer just a prompt-team abstraction. It is evolving into a runtime with persistence and operational visibility.

## Recommendations

- Evaluate agent companies by stack position, not model brand alone.
- Treat orchestration as a strategic layer, not backend plumbing.
- Pay close attention to concrete product features such as checkpointing, interrupts, traces, memory stores, protocol support, and browser or computer-use tooling.
- Ask whether a vendor’s advantage comes from model quality, workflow reliability, memory, governance, or ecosystem leverage.
- Assume that long-term commercial value may accrue to the runtime and control layers around models, not just to the models themselves.

## Sources

- [Anthropic – Four new capabilities](https://www.anthropic.com/news/agent-capabilities-api)
- [Anthropic – Introducing advanced tool use on the Claude Developer Platform](https://www.anthropic.com/engineering/advanced-tool-use)
- [Anthropic – Code execution with MCP: building more efficient AI agents](https://www.anthropic.com/engineering/code-execution-with-mcp)
- [Google Developers Blog – Agent Development Kit: Making it easy to build multi-agent applications](https://developers.googleblog.com/en/agent-development-kit-easy-to-build-multi-agent-applications/)
- [Google Cloud Blog – Build and manage multi-system agents with Vertex AI](https://cloud.google.com/blog/products/ai-machine-learning/build-and-manage-multi-system-agents-with-vertex-ai)
- [Google Cloud Blog – More ways to build and scale AI agents with Vertex AI Agent Builder](https://cloud.google.com/blog/products/ai-machine-learning/more-ways-to-build-and-scale-ai-agents-with-vertex-ai-agent-builder)
- [Google Cloud Blog – New enhanced tool governance in Vertex AI Agent Builder](https://cloud.google.com/blog/products/ai-machine-learning/new-enhanced-tool-governance-in-vertex-ai-agent-builder)
- [LangChain Docs – Durable execution](https://docs.langchain.com/oss/python/langgraph/durable-execution)
- [LangChain Docs – Interrupts](https://docs.langchain.com/oss/python/langgraph/interrupts)
- [LangChain Docs – Memory overview](https://docs.langchain.com/oss/javascript/langgraph/memory)
- [LangChain Docs – Going to production (Deep Agents)](https://docs.langchain.com/oss/javascript/deepagents/going-to-production)
- [Microsoft Azure Blog – Introducing Microsoft Agent Framework](https://azure.microsoft.com/en-us/blog/introducing-microsoft-agent-framework/)
- [Microsoft DevBlogs – Migrate your Semantic Kernel and AutoGen projects to Microsoft Agent Framework Release Candidate](https://devblogs.microsoft.com/agent-framework/migrate-your-semantic-kernel-and-autogen-projects-to-microsoft-agent-framework-release-candidate/)
- [Microsoft Learn – Introduction to Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview)
- [OpenAI Platform Docs – Migrate to the Responses API](https://platform.openai.com/docs/guides/migrate-to-responses)
- [OpenAI Platform Docs – Responses vs Chat Completions](https://platform.openai.com/docs/guides/responses-vs-chat-completions?api-mode=responses)
- [OpenAI – New tools and features in the Responses API](https://openai.com/index/new-tools-and-features-in-the-responses-api/)
- [CrewAI Docs – Documentation](https://docs.crewai.com)
- [CrewAI Docs – Flows](https://docs.crewai.com/en/concepts/flows)
- [CrewAI Docs – Observability overview](https://docs.crewai.com/en/observability/overview)
- [CrewAI Docs – Changelog](https://docs.crewai.com/en/changelog)
