import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Aamod Kumar',
        title: 'AI Engineer',
        subtitle: 'AI & Data Engineer | Cloud, Distributed Systems & Backend Architecture',
        bio: 'A Computer Science student majoring in Artificial Intelligence and Data Engineering with a distinctive profile that fuses deep technical expertise with proven strategic leadership. My work comprises building cloud infrastructures, distributed systems, and scalable backend architecture to deliver intelligent, reliable solutions built for real-world impact. Currently exploring AI Agents and Blockchain/Web3 technologies. Driven to leverage this integrated skill set to architect systems that bridge technical innovation with effective execution.',
        avatar: '/about/ak.jpeg',
        location: 'Uttar Pradesh, India',
        email: 'aamoddev23@gmail.com',
        phone: '',
        resumeUrl: '/resume',
        website: 'https://personal-blog-aamod.vercel.app',
        languages: [
            { name: 'Hindi', level: 'Native' },
            { name: 'English', level: 'Professional' },
        ],
        socialLinks: [
            {
                platform: 'GitHub',
                url: 'https://github.com/Aamod007',
                icon: 'github',
                username: 'Aamod007',
            },
            {
                platform: 'LinkedIn',
                url: 'https://www.linkedin.com/in/aamod-kumar/',
                icon: 'linkedin',
                username: 'Aamod Kumar',
            },
            {
                platform: 'Instagram',
                url: 'https://www.instagram.com/aamod.23/',
                icon: 'instagram',
                username: 'aamod.23',
            },
            {
                platform: 'Twitter',
                url: 'https://x.com/Aamoddev23',
                icon: 'twitter',
                username: 'Aamoddev23',
            },
            {
                platform: 'Discord',
                url: 'https://discord.com/users/aamoddev23',
                icon: 'discord',
                username: 'aamoddev23',
            },
            {
                platform: 'Spotify',
                url: 'https://open.spotify.com/user/313wnuolxpwgbypxzk3fme6ycvxa',
                icon: 'spotify',
                username: 'Aamod',
            },
        ],
    },
    projects: [
        {
            id: 'project-23',
            slug: 'ci-cd-azure-pipeline',
            image: '/project/azure-pipeline.png',
            title: 'CI/CD Azure Data Factory Pipeline',
            description: 'Production-style CI/CD pipeline for Azure Data Factory across Dev, QA, and Production environments.',
            longDescription: 'This project documents the design and implementation of a production-style CI/CD pipeline for Azure Data Factory (ADF), built end-to-end across three isolated environments — Dev → QA → Production — using Azure DevOps, Git, ARM templates, and YAML pipelines. It treats ADF as infrastructure-as-code: every linked service, dataset, pipeline, and trigger is version-controlled, exported as an ARM template, and promoted through environments via automated pipelines with manual approval gates before production.',

            techStack: ['Azure Data Factory', 'Azure DevOps', 'YAML Pipelines', 'ARM Templates', 'Azure Key Vault', 'ADLS Gen2', 'PowerShell', 'Node.js'],
            tools: ['Azure Portal', 'Azure DevOps', 'VS Code', 'Git'],
            status: 'ongoing',
            repoUrl: 'https://github.com/Aamod007/ci-cd-azure-pipeline',
            demoUrl: '#',
            startDate: '2026-05-01',
            role: 'Cloud & Data Engineer',
            customTimeline: 'May - June 2026',
            team: 'Personal Project',

            highlights: ['3-Environment Promotion (Dev→QA→Prod)', 'Infrastructure-as-Code for ADF', 'Managed Identity Authentication'],
            category: 'Cloud & DevOps',
            features: [
                {
                    title: 'CI/CD Pipeline Architecture',
                    items: [
                        '**Automated ARM Export**: CI pipeline uses `@microsoft/azure-data-factory-utilities` npm package to validate and export ARM templates on every merge to main.',
                        '**Multi-Stage Deployment**: YAML-based CD pipeline promotes artifacts through Dev → QA → Production with environment-specific parameter overrides.',
                        '**Manual Approval Gate**: Production deployment requires explicit human approval via Azure DevOps Environments before proceeding.'
                    ]
                },
                {
                    title: 'Security & Authentication',
                    items: [
                        '**Managed Identity**: All inter-service communication uses System-Assigned Managed Identity — zero hardcoded keys or secrets anywhere.',
                        '**Key Vault Integration**: Centralized secret management using Azure Key Vault with environment-scoped access policies.',
                        '**Branch Protection**: PR-gated merges with minimum reviewer requirements and fast-forward merge strategy.'
                    ]
                },
                {
                    title: 'Environment Isolation',
                    items: [
                        '**Isolated Resources**: Each environment (Dev, QA, Prod) has its own Data Factory, Storage Account (ADLS Gen2), and Key Vault.',
                        '**Dynamic Parameterization**: ARM template parameters are overridden per environment using dedicated `arm-params/{env}.json` files.',
                        '**Trigger Safety**: Pre/post-deployment PowerShell scripts safely stop and restart ADF triggers during deployment.'
                    ]
                },
                {
                    title: 'Git Workflow',
                    items: [
                        '**Feature Branch Isolation**: Developers work in isolated ADF branch factory views until merge, preventing concurrent-edit conflicts.',
                        '**Orchestrator Pattern**: Pipeline split into `ci-build.yaml` and `cd-deploy.yaml` reusable templates for maintainability.',
                        '**Linear History**: Fast-forward merge strategy keeps commit history clean and auditable.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/Aamod007/ci-cd-azure-pipeline.git\ncd ci-cd-azure-pipeline',
                    type: 'code'
                },
                {
                    title: 'Azure Prerequisites',
                    code: '# Create 3 Resource Groups (Dev, QA, Prod)\n# Each with: Data Factory, ADLS Gen2, Key Vault\n# Enable System-Assigned Managed Identity on each ADF',
                    type: 'text'
                },
                {
                    title: 'Azure DevOps Setup',
                    code: '# Import repo into Azure Repos\n# Create Service Connections for each subscription\n# Configure Environment approval gates for Production',
                    type: 'text'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Concurrent-Edit Conflicts in ADF",
                    solution: "Implemented a feature-branch Git workflow where each developer works in an isolated ADF branch factory view, with PR-gated merges preventing simultaneous corruption of shared pipeline logic."
                },
                {
                    problem: "Environment Secret Leakage",
                    solution: "Engineered dynamic ARM parameterization with environment-specific JSON override files, ensuring pipelines never point at the wrong environment's storage or Key Vault after deployment."
                },
                {
                    problem: "Unsafe Trigger State During Deployment",
                    solution: "Integrated Microsoft-provided pre/post-deployment PowerShell scripts that safely stop active triggers before ARM deployment and restart them after, preventing data corruption mid-deploy."
                }
            ]
        },
        {
            id: 'project-24',
            slug: 'kube-mcp',
            image: '/project/kube-mcp.png',
            title: 'Kube-MCP',
            description: 'Production-ready Model Context Protocol (MCP) server for Kubernetes diagnostics and management.',
            longDescription: 'Kube-MCP is a production-grade Model Context Protocol (MCP) server that exposes Kubernetes clusters as structured, AI-callable tools. It enables LLM agents to introspect, diagnose, and remediate cluster issues through natural language — eliminating the need for kubectl expertise. Built in Go with the Kubernetes Client-Go library, it translates MCP JSON-RPC tool calls into strongly-typed API requests with token-efficient responses optimized for LLM context windows.',

            techStack: ['Go', 'Kubernetes', 'Client-Go', 'MCP Protocol', 'Docker', 'GoReleaser', 'JSON-RPC', 'slog'],
            tools: ['VS Code', 'kubectl', 'Docker', 'Claude Desktop', 'Cursor'],
            status: 'completed',
            repoUrl: 'https://github.com/Aamod007/Kube-MCP',
            demoUrl: '#',
            startDate: '2026-06-01',
            role: 'Cloud & Platform Engineer',
            customTimeline: 'June 2026',
            team: 'Personal Project',

            highlights: ['15+ Kubernetes MCP Tools', 'Token-Efficient Responses', 'Multi-Client Compatibility'],
            category: 'Cloud & DevOps',
            features: [
                {
                    title: 'Kubernetes Introspection Tools',
                    items: [
                        '**Pod Management**: `list_pods`, `get_pod`, `get_logs` with container and tail filtering for granular diagnostics.',
                        '**Cluster Health**: `list_nodes`, `describe_node`, `get_resource_usage` for node-level CPU/memory monitoring.',
                        '**Workload Analysis**: `list_deployments`, `get_deployment`, `check_rollout_status` for deployment lifecycle tracking.'
                    ]
                },
                {
                    title: 'Resilient Architecture',
                    items: [
                        '**Token-Efficient**: Trimmed JSON summaries prevent LLM context window exhaustion while delivering actionable data.',
                        '**Read-Only by Default**: Safe introspection without accidental mutations to cluster state.',
                        '**Graceful Degradation**: Continues operating even when metrics-server is unavailable.'
                    ]
                },
                {
                    title: 'Multi-Platform Support',
                    items: [
                        '**Claude Desktop / Code**: Native MCP stdio transport integration via JSON config.',
                        '**Cursor & Cline**: Direct command registration in IDE MCP settings.',
                        '**Gemini CLI & VS Code Copilot**: Compatible with any MCP-compliant client.'
                    ]
                },
                {
                    title: 'Production Engineering',
                    items: [
                        '**Distroless Docker Images**: Minimal attack surface with secure container builds.',
                        '**Structured Logging**: `slog`-based JSON logging with context timeouts (30s) and nil-pointer checks.',
                        '**Auto-Detecting Environment**: Seamlessly works in-cluster or with local kubeconfig.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Build from Source',
                    code: 'git clone https://github.com/Aamod007/Kube-MCP.git\ncd Kube-MCP\nmake build',
                    type: 'code'
                },
                {
                    title: 'Docker Install',
                    code: 'docker pull aamod007/kubemcp:latest\n# Or build locally:\nmake docker',
                    type: 'code'
                },
                {
                    title: 'Client Configuration (Claude)',
                    code: '{\n  "mcpServers": {\n    "kubemcp": {\n      "command": "/usr/local/bin/kubemcp",\n      "env": { "KUBECONFIG": "~/.kube/config" }\n    }\n  }\n}',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "LLM Context Window Exhaustion",
                    solution: "Designed token-efficient JSON response schemas that trim verbose Kubernetes API objects to lightweight summaries, preserving actionable data while preventing context overflow."
                },
                {
                    problem: "Metrics-Server Availability",
                    solution: "Implemented graceful degradation patterns where resource usage tools return structured error messages instead of crashing when metrics-server is not installed."
                },
                {
                    problem: "Cross-Client Compatibility",
                    solution: "Used the standard MCP stdio transport protocol, ensuring compatibility across Claude Desktop, Cursor, Cline, VS Code Copilot, and other MCP-compliant clients without per-client adapters."
                }
            ]
        },
        {
            id: 'project-25',
            slug: 'kube-policy-engine',
            image: '/project/kube-policy.png',
            title: 'Kube-Policy-Engine',
            description: 'Production-grade Kubernetes admission controller with built-in OPA/Rego policy engine.',
            longDescription: 'Kube-Policy-Engine is a production-grade Kubernetes admission controller with a built-in OPA/Rego policy engine. It enforces guardrails, applies best practices, and mutates resources in real-time — all through native Kubernetes Custom Resources. The system supports both enforce and audit modes, with Prometheus metrics for observability. Built with Go using controller-runtime and Kubebuilder, it deploys via Helm with cert-manager for TLS.',

            techStack: ['Go', 'Kubernetes', 'OPA/Rego', 'Kubebuilder', 'controller-runtime', 'Helm', 'cert-manager', 'Prometheus', 'Docker'],
            tools: ['VS Code', 'kubectl', 'kind', 'Helm', 'Docker'],
            status: 'completed',
            repoUrl: 'https://github.com/Aamod007/Kube-Policy-Engine',
            demoUrl: '#',
            startDate: '2026-06-01',
            role: 'Platform Engineer',
            customTimeline: 'June - July 2026',
            team: 'Personal Project',

            highlights: ['OPA/Rego Policy Evaluation', 'Validating & Mutating Webhooks', 'Kubernetes-Native CRDs'],
            category: 'Cloud & DevOps',
            features: [
                {
                    title: 'Policy Enforcement',
                    items: [
                        '**Validating Webhook**: Intercepts CREATE/UPDATE requests and evaluates them against OPA/Rego policies in real-time.',
                        '**Mutating Webhook**: Generates RFC 6902 JSON patches to automatically fix non-compliant resources.',
                        '**Dual Mode**: Supports `enforce` (deny violations) and `audit` (record but allow) modes per policy.'
                    ]
                },
                {
                    title: 'Kubernetes-Native Design',
                    items: [
                        '**Custom Resource Definitions**: Policies are defined as standard Kubernetes `Policy` CRs with embedded Rego scripts.',
                        '**Controller-Runtime Reconciler**: Thread-safe in-memory policy registry synced from CRD changes via reconciler pattern.',
                        '**Target Matching**: Policies match by apiGroup, resource type, and operation for precise scope control.'
                    ]
                },
                {
                    title: 'Observability & Security',
                    items: [
                        '**Prometheus Metrics**: All evaluation results exposed on `:9090/metrics` for Grafana dashboards.',
                        '**TLS via cert-manager**: Automatic certificate provisioning for webhook HTTPS endpoints.',
                        '**Health Endpoints**: `/healthz` and `/readyz` for Kubernetes liveness and readiness probes.'
                    ]
                },
                {
                    title: 'Developer Experience',
                    items: [
                        '**Helm Deployment**: One-command cluster installation with `helm install` and namespace isolation.',
                        '**CLI Tool**: Built-in CLI for policy validation and testing before cluster deployment.',
                        '**E2E Test Suite**: Comprehensive end-to-end tests using kind clusters for CI/CD validation.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Create Cluster & Install cert-manager',
                    code: 'kind create cluster --config deploy/kind-config.yaml\nkubectl apply -f https://github.com/cert-manager/cert-manager/releases/latest/download/cert-manager.yaml\nkubectl wait --for=condition=Available deploy -n cert-manager --all --timeout=120s',
                    type: 'code'
                },
                {
                    title: 'Deploy via Helm',
                    code: 'helm install kpe deploy/helm/kube-policy-engine \\\n  --namespace kpe-system \\\n  --create-namespace',
                    type: 'code'
                },
                {
                    title: 'Apply a Sample Policy',
                    code: 'kubectl apply -f policies/require-pod-labels/policy.yaml\nkubectl get policies -A',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Thread-Safe Policy Registry",
                    solution: "Designed a concurrent-safe in-memory policy cache using Go's sync.RWMutex, synced from Kubernetes CRD state via the controller-runtime reconciler pattern."
                },
                {
                    problem: "OPA Evaluation Latency",
                    solution: "Pre-compiled Rego policies on CRD creation/update, caching the compiled modules to avoid repeated parsing on every admission request."
                },
                {
                    problem: "Webhook TLS Certificate Management",
                    solution: "Integrated cert-manager with automatic certificate issuance and rotation, eliminating the need for manual TLS provisioning in production clusters."
                }
            ]
        },
        {
            id: 'project-26',
            slug: 'ci-cd-server',
            image: '/project/cicd-server.png',
            title: 'CI-CD Server',
            description: 'Self-hosted CI/CD server with Flask, JWT authentication, and real-time log streaming.',
            longDescription: 'CI-CD-Server is a lightweight, self-hosted Continuous Integration/Continuous Deployment server built with Flask, JWT authentication, and Supabase. It allows users to clone any public Git repository, execute automated pipelines with real-time log streaming, and manage jobs through a modern dark-themed web interface. The system auto-detects project types (Python, Node.js, Java, Go, Rust) and provides full CRUD operations via REST API.',

            techStack: ['Python', 'Flask', 'Supabase', 'PostgreSQL', 'JWT', 'HTML/CSS/JS', 'Git'],
            tools: ['VS Code', 'Supabase Dashboard', 'Render', 'Postman'],
            status: 'completed',
            repoUrl: 'https://github.com/Aamod007/CI-CD-Server',
            demoUrl: 'https://ci-cd-server-0lka.onrender.com',
            startDate: '2026-04-01',
            role: 'Backend Developer',
            customTimeline: 'April 2026',
            team: 'Personal Project',

            highlights: ['Real-time Log Streaming', 'Auto Project Type Detection', 'JWT Authentication'],
            category: 'Software Engineering',
            features: [
                {
                    title: 'Pipeline Execution',
                    items: [
                        '**Git Integration**: Clone any public Git repository and execute CI/CD pipelines automatically.',
                        '**Auto-Detection**: Automatically detect project type (Python, Node.js, Java, Go, Rust) and apply appropriate build commands.',
                        '**Real-time Logs**: Stream execution logs to the UI in real-time for immediate debugging feedback.'
                    ]
                },
                {
                    title: 'Job Management',
                    items: [
                        '**Full CRUD**: Create, Read, Update, Delete jobs via REST API endpoints.',
                        '**Status Tracking**: Monitor job lifecycle (pending → running → success/failed/cancelled) in real-time.',
                        '**Retry & Cancel**: Retry failed jobs or cancel running ones directly from the dashboard.'
                    ]
                },
                {
                    title: 'Authentication & Security',
                    items: [
                        '**Raw JWT Implementation**: Secure user registration and login with hand-rolled JWT — no third-party auth dependency.',
                        '**Password Hashing**: Bcrypt-based password storage for credential security.',
                        '**Token Validation**: Middleware-based authentication for all protected API endpoints.'
                    ]
                },
                {
                    title: 'Modern Web Interface',
                    items: [
                        '**Dark-Themed Dashboard**: Responsive, modern UI for job management and log visualization.',
                        '**Python Client SDK**: Programmatic client example for CI/CD automation via scripts.',
                        '**Supabase Backend**: PostgreSQL database with real-time capabilities for instant state updates.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Clone & Setup',
                    code: 'git clone https://github.com/Aamod007/CI-CD-Server.git\ncd CI-CD-Server\npython -m venv venv\nvenv\\Scripts\\activate\npip install -r requirements.txt',
                    type: 'code'
                },
                {
                    title: 'Environment Configuration',
                    code: 'cp .env.example .env\n# Edit .env:\nSUPABASE_URL=https://your-project.supabase.co\nSUPABASE_KEY=your-service-role-key\nJWT_SECRET=your-super-secret-key',
                    type: 'code'
                },
                {
                    title: 'Run Server',
                    code: 'python app.py\n# Visit http://localhost:5000',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Multi-Language Project Detection",
                    solution: "Implemented a heuristic detection system that scans repository files for language-specific markers (requirements.txt, package.json, pom.xml, go.mod, Cargo.toml) to auto-configure build pipelines."
                },
                {
                    problem: "Real-time Log Delivery",
                    solution: "Built a log streaming pipeline that captures subprocess stdout/stderr in real-time and persists entries to Supabase's job_logs table with level-based filtering."
                },
                {
                    problem: "Secure Job Isolation",
                    solution: "Designed a workspace management system that clones each repository into an isolated temporary directory, preventing cross-job file contamination during concurrent builds."
                }
            ]
        },
        {
            id: 'project-27',
            slug: 'cyber-defence',
            image: '/project/cyber-defence.png',
            title: 'Cyber Defence IDS',
            description: 'ML-powered Intrusion Detection System with real-time attack simulation and MITRE ATT&CK mapping.',
            longDescription: 'Cyber Defence is an ML-powered Intrusion Detection System (IDS) featuring real-time attack simulation, Zeek PCAP analysis, and MITRE ATT&CK mapping. It uses a Random Forest Binary Classifier trained on the UNSW-NB15 dataset (82K samples, 39 features) achieving 97.15% accuracy. The platform includes a WebSocket-based real-time dashboard with VM-style simulation windows, explainable AI (XAI) for alert justification, and full terminal command interface.',

            techStack: ['Python', 'XGBoost', 'Random Forest', 'Scikit-learn', 'WebSockets', 'Zeek', 'HTML/CSS/JS', 'Docker'],
            tools: ['VS Code', 'Wireshark', 'Zeek', 'Jupyter Notebook'],
            status: 'completed',
            repoUrl: 'https://github.com/Aamod007/Cyber-Defence',
            demoUrl: '#',
            startDate: '2026-03-01',
            role: 'Security Engineer & ML Developer',
            customTimeline: 'March - April 2026',
            team: 'Personal Project',

            highlights: ['97.15% Detection Accuracy', 'MITRE ATT&CK Mapping', 'Real-time Zeek PCAP Analysis'],
            category: 'AI & Machine Learning',
            features: [
                {
                    title: 'ML-Powered Detection',
                    items: [
                        '**Random Forest Classifier**: Binary classifier trained on 82K UNSW-NB15 samples with 300 estimators and balanced class weights.',
                        '**39 Network Features**: Comprehensive feature vector including duration, packet stats, TTL, jitter, TCP round-trip, and flow-level metrics.',
                        '**97.15% Accuracy**: 98.51% precision and 96.27% recall on attack class detection.'
                    ]
                },
                {
                    title: 'Threat Intelligence',
                    items: [
                        '**MITRE ATT&CK Mapping**: Automatic technique and tactic mapping for every detected attack.',
                        '**Explainability (XAI)**: Shows why each alert was flagged with feature importance analysis.',
                        '**Ground Truth Comparison**: Side-by-side ML prediction vs actual label for model validation.'
                    ]
                },
                {
                    title: 'Real-time Analysis',
                    items: [
                        '**Zeek PCAP Processing**: Process PCAP files through Zeek → conn.log → 41-feature extraction → ML prediction pipeline.',
                        '**WebSocket Dashboard**: Live monitoring with VM-style simulation windows for real-time attack visualization.',
                        '**Terminal Commands**: Full CLI interface (`/attack`, `/zeek pcap`, `/stats`, `/export`) for SOC operators.'
                    ]
                },
                {
                    title: 'Data Export & Reporting',
                    items: [
                        '**JSON/CSV Export**: One-command export of detection results for SIEM integration.',
                        '**Attack Simulation**: Dataset-driven attack simulation using real UNSW-NB15 samples with genuine IP addresses.',
                        '**Docker Deployment**: Containerized deployment ready for cloud or on-premise SOC environments.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Clone & Setup',
                    code: 'git clone https://github.com/Aamod007/Cyber-Defence.git\ncd Cyber-Defence\npython -m venv .venv\n.venv\\Scripts\\activate\npip install -r backend/requirements.txt',
                    type: 'code'
                },
                {
                    title: 'Train Model',
                    code: 'python train_rf_binary.py\n# Saves model to model/rf_binary_classifier.joblib',
                    type: 'code'
                },
                {
                    title: 'Run Platform',
                    code: 'python -m backend.server\n# Open http://127.0.0.1:8765',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Imbalanced Dataset Classes",
                    solution: "Applied balanced class weights in the Random Forest configuration to prevent the model from being biased toward the majority (Normal) class in the UNSW-NB15 dataset."
                },
                {
                    problem: "Zeek-to-ML Feature Alignment",
                    solution: "Built a custom pipeline that maps Zeek conn.log fields to the 41 UNSW-NB15 features expected by the classifier, handling missing fields with statistical imputation."
                },
                {
                    problem: "Real-time WebSocket Scalability",
                    solution: "Designed an async WebSocket server architecture that handles concurrent attack simulations and PCAP analyses without blocking the main event loop."
                }
            ]
        },
        {
            id: 'project-28',
            slug: 'chanakya-x',
            title: 'ChanakyaX',
            description: 'Discord bot connecting servers to local LLMs via Ollama with real-time streaming responses.',
            longDescription: 'ChanakyaX is a Discord bot that connects your server to a local Large Language Model (LLM) backend via Ollama, enabling real-time AI-powered conversations using slash commands. Built with discord.js and TypeScript, it features a queue management system for concurrent prompt processing, automatic thread creation for each user prompt, and real-time streaming of LLM responses. The default model is DeepSeek-R1:7B, but any Ollama-compatible model can be used.',

            techStack: ['TypeScript', 'discord.js', 'Node.js', 'Ollama', 'DeepSeek-R1', 'REST API'],
            tools: ['VS Code', 'Discord Developer Portal', 'Ollama', 'PowerShell'],
            status: 'completed',
            repoUrl: 'https://github.com/Aamod007/ChanakyaX',
            demoUrl: '#',
            startDate: '2026-02-01',
            role: 'Software Developer',
            customTimeline: 'February 2026',
            team: 'Personal Project',

            highlights: ['Real-time LLM Streaming', 'Queue Management System', 'Slash Command Interface'],
            category: 'AI & Machine Learning',
            features: [
                {
                    title: 'Discord Integration',
                    items: [
                        '**Slash Commands**: `/prompt` command for sending prompts to the local LLM backend.',
                        '**Thread-Based Responses**: Automatic thread creation for each user prompt for organized conversations.',
                        '**Real-time Streaming**: LLM responses are streamed in real-time, updating thread messages as tokens arrive.'
                    ]
                },
                {
                    title: 'Queue Management',
                    items: [
                        '**Concurrent Processing**: Queue system processes up to 3 prompts concurrently for fair resource allocation.',
                        '**Rate Limit Compliance**: Built-in rate limiting ensures Discord API limits are never exceeded.',
                        '**FIFO Processing**: Prompts are queued and processed in order to prevent starvation.'
                    ]
                },
                {
                    title: 'LLM Backend',
                    items: [
                        '**Ollama Integration**: Connects to local Ollama API at `localhost:11434` for private, zero-latency inference.',
                        '**Model Flexibility**: Default DeepSeek-R1:7B, but configurable to any Ollama-supported model (Llama, Mistral, etc.).',
                        '**Streaming API**: Uses Ollama\'s streaming generate endpoint for progressive response delivery.'
                    ]
                },
                {
                    title: 'Developer Experience',
                    items: [
                        '**Full TypeScript**: Type-safe codebase with custom Discord.js type extensions.',
                        '**Auto Command Deploy**: Slash commands are deployed automatically on bot startup.',
                        '**Extensible Architecture**: Add new commands in `src/commands/` following the prompt command pattern.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Ollama Setup',
                    code: 'ollama run deepseek-r1:7b\n# Keep terminal running',
                    type: 'code'
                },
                {
                    title: 'Bot Setup',
                    code: 'git clone https://github.com/Aamod007/ChanakyaX.git\ncd ChanakyaX\nnpm install\nnpx tsc',
                    type: 'code'
                },
                {
                    title: 'Configure & Run',
                    code: '# Create .env:\nDISCORD_LLM_BOT_TOKEN=your-bot-token\nDISCORD_LLM_BOT_CLIENT_ID=your-client-id\n\nnode dist/bot.js',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Discord Message Length Limits",
                    solution: "Implemented a chunked message update system that splits long LLM responses across multiple Discord messages while maintaining coherent streaming presentation."
                },
                {
                    problem: "Concurrent Queue Starvation",
                    solution: "Designed a fair FIFO queue with configurable concurrency (3 workers) that prevents any single user from monopolizing LLM inference time."
                },
                {
                    problem: "Streaming Response Latency",
                    solution: "Used Ollama's streaming API with progressive message edits to show tokens as they arrive, giving users immediate feedback instead of waiting for full generation."
                }
            ]
        },
        {
            id: 'project-29',
            slug: 'kolam-ai',
            image: '/project/kolam-ai.png',
            title: 'Kolam AI',
            description: 'AI and AR platform to preserve, analyze, and generate traditional Indian Kolam (Rangoli) designs.',
            longDescription: 'Kolam AI is a digital platform that uses Artificial Intelligence (AI) and Augmented Reality (AR) to recognize, create, and preserve Kolam (Rangoli) designs — traditional Indian art forms with deep cultural, artistic, and mathematical significance. Users can upload a Kolam photo for AI-powered pattern recognition including dot grid detection, symmetry analysis, and style classification. The platform also generates new Kolam patterns, provides step-by-step drawing tutorials, and features a community hub with leaderboards and challenges.',

            techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Python', 'Shadcn UI'],
            tools: ['VS Code', 'Supabase Dashboard', 'Vercel', 'Figma'],
            status: 'completed',
            repoUrl: 'https://github.com/Aamod007/Kolam-AI',
            demoUrl: 'https://kolamai.vercel.app/',
            startDate: '2026-05-01',
            role: 'Full Stack & AI Developer',
            customTimeline: 'May - June 2026',
            team: 'Personal Project',

            highlights: ['AI Pattern Recognition', 'Augmented Reality Designer', 'Heritage Preservation Platform'],
            category: 'AI & Machine Learning',
            features: [
                {
                    title: 'AI-Powered Recognition',
                    items: [
                        '**Pattern Analysis**: Upload a Kolam photo and instantly identify dot grids, symmetry patterns, and regional styles.',
                        '**Design Generation**: AI-powered instant Kolam pattern creation based on mathematical and cultural rulesets.',
                        '**Style Classification**: Automatic categorization of Kolam designs by regional origin and complexity.'
                    ]
                },
                {
                    title: 'Cultural Preservation',
                    items: [
                        '**Heritage Explorer**: Discover the history, regional styles, and cultural significance of Kolam art across India.',
                        '**Festival Calendar**: Dynamic calendar connecting Kolam designs to festivals and daily rituals.',
                        '**Learning Mode**: Interactive step-by-step guides and quizzes to master Kolam drawing and symbolism.'
                    ]
                },
                {
                    title: 'Augmented Reality',
                    items: [
                        '**AR Designer**: Visualize and create Kolam designs in AR, placing them in real-world spaces using a phone camera.',
                        '**Interactive Preview**: Preview generated designs overlaid on real surfaces before drawing.',
                        '**Tradition Meets Technology**: Blending centuries-old art with modern AR capabilities.'
                    ]
                },
                {
                    title: 'Community & Gamification',
                    items: [
                        '**Community Hub**: Share creations, join challenges, and discover designs from artists worldwide.',
                        '**Leaderboard System**: Gamified point system and rankings to motivate engagement.',
                        '**Design Challenges**: Regular competitions centered around specific Kolam styles and festivals.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Clone & Install',
                    code: 'git clone https://github.com/Aamod007/Kolam-AI.git\ncd Kolam-AI\nnpm install',
                    type: 'code'
                },
                {
                    title: 'Environment Setup',
                    code: '# Create .env.local with Supabase credentials\nNEXT_PUBLIC_SUPABASE_URL=your-supabase-url\nNEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key',
                    type: 'code'
                },
                {
                    title: 'Run Development',
                    code: 'npm run dev\n# Visit http://localhost:3000',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Kolam Pattern Symmetry Detection",
                    solution: "Developed custom image processing algorithms in Python to detect rotational and reflective symmetry in uploaded Kolam photos, handling imperfect hand-drawn designs."
                },
                {
                    problem: "Cultural Dataset Scarcity",
                    solution: "Curated a heritage dataset by digitizing traditional Kolam patterns from regional archives and cultural publications, annotating each with metadata on origin, style, and festival context."
                },
                {
                    problem: "AR Rendering Performance",
                    solution: "Optimized the AR design overlay pipeline with lazy loading and adaptive resolution scaling to maintain smooth frame rates on mobile devices."
                }
            ]
        },
        {
            id: 'project-30',
            slug: 'flight-reservation-system',
            title: 'Flight Reservation System',
            description: 'Desktop flight booking application with PyQt5 GUI, MySQL storage, and Twilio SMS notifications.',
            longDescription: 'The Flight Reservation System is a professional desktop application for managing flight reservations, built using Python and PyQt5 for the GUI layer, MySQL for persistent data storage, and Twilio API for SMS booking confirmations. The application features user authentication, flight search with route and date filtering, booking management with real-time status tracking, and an admin panel for managing flight schedules. It demonstrates full-stack desktop application development with relational database design and third-party API integration.',

            techStack: ['Python', 'PyQt5', 'MySQL', 'Twilio API', 'Qt Designer', 'SQL'],
            tools: ['VS Code', 'Qt Designer', 'MySQL Workbench', 'Twilio Console'],
            status: 'completed',
            repoUrl: 'https://github.com/Aamod007/Flight',
            demoUrl: '#',
            startDate: '2024-01-01',
            role: 'Software Developer',
            customTimeline: 'January 2024',
            team: 'Personal Project',

            highlights: ['PyQt5 Desktop GUI', 'Twilio SMS Notifications', 'MySQL Relational Database'],
            category: 'Software Engineering',
            features: [
                {
                    title: 'Booking Management',
                    items: [
                        '**Flight Search**: Search available flights by source city, destination, and travel date with real-time results.',
                        '**Reservation System**: Book, view, and cancel flight reservations with unique booking IDs.',
                        '**Status Tracking**: Track booking lifecycle (confirmed/cancelled) with timestamped state changes.'
                    ]
                },
                {
                    title: 'User Experience',
                    items: [
                        '**PyQt5 GUI**: Responsive desktop interface with stacked widgets, animations, and dynamic form validation.',
                        '**User Authentication**: Secure login and registration system with hashed password storage.',
                        '**User Dashboard**: Centralized view of all bookings with quick action buttons for management.'
                    ]
                },
                {
                    title: 'Notifications & Integration',
                    items: [
                        '**SMS Confirmations**: Automatic Twilio-powered SMS notifications sent on successful booking.',
                        '**MySQL Backend**: Relational database with normalized schema for users, flights, and bookings.',
                        '**Admin Panel**: Flight schedule and user data management for system administrators.'
                    ]
                },
                {
                    title: 'Technical Architecture',
                    items: [
                        '**Qt Designer Integration**: UI files designed visually in Qt Designer and loaded dynamically via `PyQt5.uic`.',
                        '**Database Schema**: Properly normalized MySQL tables with foreign key constraints and indexed queries.',
                        '**Environment Configuration**: Secure Twilio credential management via environment variables.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Clone & Install',
                    code: 'git clone https://github.com/Aamod007/Flight.git\ncd Flight\npip install PyQt5 mysql-connector-python twilio',
                    type: 'code'
                },
                {
                    title: 'Database Setup',
                    code: '# Create MySQL database\nCREATE DATABASE flight_reservation;\n# Import schema.sql or create tables manually',
                    type: 'code'
                },
                {
                    title: 'Configure & Run',
                    code: '# Update MySQL credentials in main.py\n# Set Twilio environment variables\nexport TWILIO_ACCOUNT_SID=your_sid\nexport TWILIO_AUTH_TOKEN=your_token\n\npython main.py',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Dynamic UI State Management",
                    solution: "Implemented a stacked widget architecture in PyQt5 that cleanly transitions between login, search, booking, and dashboard views without window recreation overhead."
                },
                {
                    problem: "Concurrent Database Access",
                    solution: "Designed thread-safe MySQL connector patterns with connection pooling to prevent race conditions during simultaneous booking operations."
                },
                {
                    problem: "SMS Delivery Reliability",
                    solution: "Built a retry mechanism with error handling around the Twilio API to gracefully handle network timeouts and invalid phone numbers without crashing the application."
                }
            ]
        }
    ],
    experiences: [
        // 1. PROFESSIONAL EXPERIENCE
        {
            id: 'prof-1',
            company: 'Dicoding Academy',
            position: 'Machine Learning Code Reviewer',
            description: 'Technical evaluation and quality assurance of ML project submissions.',
            responsibilities: [
                'Conducting in-depth code analysis for ML projects',
                'Validating logical correctness and efficiency',
                'Enforcing industry best practices',
                'Providing expert, actionable feedback to learners',
            ],
            skills: ['Code Review', 'Machine Learning', 'Python', 'Quality Assurance', 'Mentorship'],
            startDate: '2025-01-01',
            endDate: '2025-01-31', // 1 Month
            isOngoing: false,
            location: 'Remote',
            type: 'freelance',
            logo: '/assets/dicodinglogo.png?v=2',
            externalLink: 'https://github.com/Aamod007/Dicoding-Reviews-Submission',
        },
        {
            id: 'prof-2',
            company: 'Dicoding Indonesia',
            position: 'Digital Learning Experience Auditor',
            description: 'Educational content development and quality assurance.',
            responsibilities: [
                'Reviewing and evaluating AI Engineer learning path',
                'Providing feedback for instructional design improvement',
                'Contributing to curriculum and syllabus development',
                'Assessing learner feedback and course usability',
            ],
            skills: ['Content Review', 'AI Education', 'Instructional Design', 'Quality Assurance'],
            startDate: '2025-10-01',
            endDate: '2026-01-01', // 3 Months
            isOngoing: false,
            location: 'Remote',
            type: 'freelance',
            logo: '/assets/dicodinglogo.png?v=2',
            externalLink: 'https://docs.google.com/presentation/d/13gNI6ttgW3eMXgZS8G3LzEbzOVwQ3Ot4HVWER0hpUgI/edit?usp=sharing',
        },
        {
            id: 'prof-3',
            company: 'HUMIC Engineering Research Center',
            position: 'AI Developer Intern',
            description: 'During my internship, I engineered transformer-based models for cybersecurity threat detection, achieving exceptional F1-scores across large-scale datasets. Working within a research team, I successfully delivered integrated AI-driven security solutions for complex intrusion detection challenges.',
            responsibilities: [
                'Managing and processing large-scale datasets through entire ML pipeline',
                'Building Deep Learning and Transformer-based attack detection models',
                'Fine-tuning model hyperparameters for high precision',
                'Collaborating on AI-driven threat detection research',
            ],
            skills: ['Deep Learning', 'Transformers', 'Data Processing', 'Cybersecurity AI', 'Python'],
            startDate: '2025-09-01',
            endDate: '2025-12-01', // 3 Months
            isOngoing: false,
            location: 'Hybrid',
            type: 'internship',
            logo: '/assets/HumicLogo.png',
            externalLink: 'https://github.com/Aamod007/Security-Automation-GenAI',
        },
        {
            id: 'prof-4',
            company: 'Cyber Physical System Laboratory',
            position: 'Computer Vision Researcher Intern',
            description: 'AI Research focusing on the intersection of artificial intelligence and physical systems.',
            responsibilities: [
                'End-to-end development of intelligent models',
                'Investigating state-of-the-art Deep Learning architectures',
                'Implementing Machine Learning algorithms for real-world applications',
                'Contributing to pioneering autonomous and intelligent solutions',
            ],
            skills: ['Computer Vision', 'Deep Learning', 'Machine Learning', 'Research', 'Python'],
            startDate: '2025-07-01',
            endDate: '2025-09-01', // 2 Months
            isOngoing: false,
            location: 'On-site',
            type: 'internship',
            logo: '/assets/logocps.png',
            externalLink: 'https://medium.com/@cpslaboratory2324/dmouv-sistem-smart-motion-detection-berbasis-internet-of-things-8f26ef2427f1',
        },
        {
            id: 'prof-5',
            company: 'Advanced Software Engineering Laboratory',
            position: 'System Analyst Intern',
            description: 'Research-focused software engineering environment.',
            responsibilities: [
                'Comprehensive analysis of system requirements',
                'Translating requirements into SRS documentation',
                'Designing system architecture with UML diagrams',
                'Collaborating with Development, UI/UX, and QA teams',
            ],
            skills: ['System Analysis', 'SRS/SDD', 'UML', 'Software Design'],
            startDate: '2025-07-01',
            endDate: '2025-10-01', // 3 Months
            isOngoing: false,
            location: 'Remote',
            type: 'internship',
            logo: '/assets/aselablogo.png',
            externalLink: 'https://github.com/Aamod007/Voices-Unheard-ASE',
        },
        {
            id: 'prof-6',
            company: 'Informatics Laboratory, Telkom University',
            position: 'Computer Network Practicum Assistant (Contract-Based)',
            description: 'I mentored over 100 students in advanced networking concepts, including TCP/IP and socket programming, while serving as PIC for major laboratory projects. My role involved leading 15+ teams through successful project completions and maintaining rigorous academic standards through comprehensive evaluation.',
            responsibilities: [
                'Mentoring lab sessions with up to 30 students',
                'Leading Socket Programming project as PIC',
                'Designing evaluation criteria and grading',
                'Serving as exam invigilator',
            ],
            skills: ['Networking', 'Socket Programming', 'TCP/IP', 'Teaching', 'Technical Mentorship'],
            startDate: '2025-09-01',
            endDate: '2026-01-01', // 4 Months
            isOngoing: false,
            location: 'Hybrid',
            type: 'contract',
            logo: '/assets/iflablogo.png',
            externalLink: '',
        },
        {
            id: 'prof-7',
            company: 'Cyber Physical System Laboratory',
            position: 'Research Assistant (Contract-Based)',
            description: 'As a Research Assistant and Mentor, I analyzed over 100K records across multiple datasets and developed high-accuracy ML/DL models. I also spearheaded mentoring initiatives for 60+ junior assistants, guiding them through end-to-end deep learning project development.',
            responsibilities: [
                'Contributing to research-based products and collaborative AI projects',
                'Designing comprehensive learning materials for Deep Learning and Computer Vision',
                'Serving as mentor and instructor in workshops',
                'Reviewing and analyzing academic papers and research topics',
            ],
            skills: ['Deep Learning', 'Computer Vision', 'Research', 'Academic Writing', 'Mentorship'],
            startDate: '2025-08-01',
            isOngoing: true,
            location: 'Hybrid',
            type: 'contract',
            logo: '/assets/logocps.png',
        },
        {
            id: 'prof-8',
            company: 'Dinas Pangan dan Pertanian Kota Bandung',
            position: 'Data Entry Assistant',
            description: 'I streamlined data management processes by validating thousands of daily records and producing analytical reports to support government decision-making. My work focused on maintaining high data accuracy and documenting structured logs for research and resource tracking.',
            responsibilities: [
                'Daily data input and validation',
                'Developing analytical reports for stakeholders',
                'Ensuring data accuracy and consistency',
                'Structured documentation of tasks',
            ],
            skills: ['Data Entry', 'Data Analysis', 'Excel', 'Documentation'],
            startDate: '2024-06-01',
            endDate: '2024-08-01', // 2 Months
            isOngoing: false,
            location: 'On-site',
            type: 'internship',
            logo: '/assets/dinas-pangan-dan-pertanian-kota-bandung.png',
            externalLink: 'https://riibse.center.telkomuniversity.ac.id/e-selamat/',
        },

        // 2. LEADERSHIP & ORGANIZATIONAL EXPERIENCE
        {
            id: 'lead-1',
            company: 'Cyber Physical System Laboratory',
            position: 'Human Resources Staff',
            description: 'Fostering growth and development among lab assistants by implementing strategic HR initiatives.',
            responsibilities: [
                'Implementing strategic HR initiatives',
                'Facilitating training programs',
                'Promoting supportive, collaborative work culture',
                'Strengthening team performance',
            ],
            skills: ['HR Management', 'Team Development', 'Communication', 'Strategic Planning'],
            startDate: '2025-07-01',
            isOngoing: true,
            location: 'Hybrid',
            type: 'contract',
            logo: '/assets/logocps.png',
            externalLink: 'https://cpslaboratory.com/',
        },
        {
            id: 'lead-2',
            company: 'Digistar Club by Telkom Indonesia',
            position: 'Chief Committee',
            description: 'Serving as Project Officer, I directed the execution of major digital programs for 500+ participants, coordinating diverse speakers and industry partners. By designing interactive event concepts and managing a cross-functional team, I significantly boosted engagement and ensured 100% milestone completion.',
            responsibilities: [
                'Leading end-to-end planning for DigiTalks and Digicourse',
                'Overseeing program execution and coordination',
                'Stakeholder management and communication',
                'Compiling post-event reports and analysis',
            ],
            skills: ['Project Management', 'Event Planning', 'Leadership', 'Stakeholder Management'],
            startDate: '2025-03-01',
            endDate: '2025-09-01', // 6 Months
            isOngoing: false,
            location: 'Indonesia',
            type: 'contract',
            logo: '/assets/logodigistar.png',
        },
        {
            id: 'lead-3',
            company: 'Digistar Club by Telkom Indonesia',
            position: 'Ranger – Digital Application Club',
            description: 'Key committee member for DigiCourse and Digicamp, Telkom Indonesia flagship digital talent initiatives.',
            responsibilities: [
                'Steering flagship digital talent programs',
                'Developing multi-channel communications strategy',
                'Managing logistical planning for 200+ participants',
                'Robust stakeholder liaison and promotion',
            ],
            skills: ['Event Management', 'Public Relations', 'Logistics', 'Communications'],
            startDate: '2025-03-01',
            isOngoing: true,
            location: 'Indonesia',
            type: 'contract',
            logo: '/assets/logodigistar.png',
            externalLink: 'https://www.digistartelkom.id/',
        },
        {
            id: 'lead-4',
            company: 'Himpunan Mahasiswa Teknologi Informasi, Telkom University',
            position: 'Academic Affairs Division',
            description: 'Planning and execution of academic programs and student support initiatives.',
            responsibilities: [
                'Managing academic programs lifecycle',
                'Event operations and logistics support',
                'Audience engagement and promotion',
                'Document preparation and coordination',
            ],
            skills: ['Academic Planning', 'Event Operations', 'Student Engagement', 'Teamwork'],
            startDate: '2024-09-01',
            endDate: '2025-01-01', // 4 Months
            isOngoing: false,
            location: 'Bandung',
            type: 'volunteer',
            logo: '/assets/HMITlogo.png?v=1',
        },
        {
            id: 'lead-5',
            company: 'Youth Ranger Indonesia',
            position: 'Public Relations Communication',
            description: 'Strategic role in public narrative and community engagement.',
            responsibilities: [
                'Architecting integrated PR strategies',
                'Elevating brand visibility and community affinity',
                'Cultivating stakeholder and media relationships',
                'Orchestrating strategic communication channels',
            ],
            skills: ['Public Relations', 'Communications', 'Media Relations', 'Stakeholder Management'],
            startDate: '2024-07-01',
            endDate: '2025-01-01', // 6 Months
            isOngoing: false,
            location: 'West Java',
            type: 'contract',
            logo: '/assets/youth-ranger-indonesia.png',
            externalLink: 'https://youthrangerindonesia.com/',
        },

        // 3. VOLUNTEER EXPERIENCE
        {
            id: 'vol-1',
            company: 'Galeri Investasi BEI Telkom University',
            position: 'Fundraising Assistant',
            description: 'Instrumental in executing fundraising for economic empowerment events.',
            responsibilities: [
                'Execution of fundraising campaign',
                'Strategic donor prospecting',
                'High-impact sponsorship proposal development',
                'Management of targeted outreach pipeline',
            ],
            skills: ['Fundraising', 'Sponsorship Proposals', 'Outreach', 'Financial Literacy'],
            startDate: '2025-02-01',
            endDate: '2025-03-01', // 1 Month
            isOngoing: false,
            location: 'Bandung',
            type: 'volunteer',
            logo: '/assets/logobei.png',
            externalLink: 'https://www.gibeitelkomuniversity.site/',
        },
        {
            id: 'vol-2',
            company: 'HMIT Telkom University',
            position: 'Event Planner & Organizer',
            description: 'Key member of MAKRAB 2024 organizing committee.',
            responsibilities: [
                'Strategic program design and execution',
                'Co-development of master event agenda',
                'Spearheading core knowledge-sharing segments',
                'Collaborating for impactful event delivery',
            ],
            skills: ['Event Planning', 'Program Design', 'Leadership', 'Team Collaboration'],
            startDate: '2024-11-01',
            endDate: '2024-12-01', // 1 Month
            isOngoing: false,
            location: 'Bandung',
            type: 'volunteer',
            logo: '/assets/HMITlogo.png?v=1',
        },
        {
            id: 'vol-3',
            company: 'Young On Top Bandung',
            position: 'Environmental Hygiene Team',
            description: 'Volunteer for environmental improvement initiatives.',
            responsibilities: [
                'Hands-on clean-up drives',
                'Implementing waste segregation systems',
                'Strategic community outreach and education',
                'Coordination with external partners',
            ],
            skills: ['Environmental Awareness', 'Teamwork', 'Logistics', 'Community Education'],
            startDate: '2024-02-01',
            endDate: '2024-02-07', // 1 Week
            isOngoing: false,
            location: 'Bandung',
            type: 'volunteer',
            logo: '/assets/yotlogo.jpg',
        },
        {
            id: 'vol-4',
            company: 'SMA Negeri 88 Jakarta',
            position: 'Logistics Operator – Campus Expo 2024',
            description: 'Logistics Coordinator managing the operational backbone of the event.',
            responsibilities: [
                'Directing all logistical pillars (venue, equipment, transport)',
                'Orchestrating team coordination',
                'Efficient on-the-ground execution',
                'Performance evaluation and reporting',
            ],
            skills: ['Logistics Management', 'Operations', 'Leadership', 'Team Coordination'],
            startDate: '2024-01-01',
            endDate: '2024-01-15', // 2 Weeks
            isOngoing: false,
            location: 'Jakarta',
            type: 'volunteer',
            logo: '/assets/sman88logo.png',
        },

        // 4. CERTIFICATIONS & PROFESSIONAL DEVELOPMENT
        {
            id: 'cert-1',
            company: 'Coding Camp powered by DBS Foundation',
            position: 'Scholarship Awardee – Progressive Learning Program',
            description: 'Intensive AI Engineer training program.',
            responsibilities: [
                'Comprehensive Machine Learning curriculum',
                'Deep Learning for Computer Vision/NLP',
                'MLOps best practices for production models',
                'End-to-end AI Engineer skill development',
            ],
            skills: ['Machine Learning', 'Deep Learning', 'MLOps', 'AI Engineering'],
            startDate: '2025-04-01',
            endDate: '2025-10-01', // 6 Months
            isOngoing: false,
            location: 'Indonesia',
            type: 'apprenticeship',
            logo: '/assets/DBSLogo.png?v=1',
            externalLink: 'https://mail.google.com/mail/u/0/#search/DBS/FMfcgzQbfxpgnbGGdbWztHKKvfbDfgjx',
        },
        {
            id: 'cert-2',
            company: 'Indosat Ooredoo Hutchison Digital Camp',
            position: 'Machine Learning Engineer Program',
            description: 'Intensive ML curriculum aligned with industry standards.',
            responsibilities: [
                'Advanced ML lifecycle competencies',
                'Data pre-processing and model development',
                'Production-ready project portfolio creation',
                'Industry-relevant skill development',
            ],
            skills: ['Machine Learning', 'Data Preprocessing', 'Model Deployment', 'Python'],
            startDate: '2024-06-01',
            endDate: '2024-12-01', // 6 Months
            isOngoing: false,
            location: 'Indonesia',
            type: 'apprenticeship',
            logo: '/assets/indosat-ooredoo-hutchison-digital-camp.png',
            externalLink: 'https://idcamp.ioh.co.id/',
        },
        {
            id: 'cert-3',
            company: 'AIESEC in Bandung',
            position: 'Delegate – AIESEC Future Leaders 2024',
            description: 'Development program for impactful, socially conscious leadership.',
            responsibilities: [
                'Personal and professional development curriculum',
                'Implementing innovative projects targeting global issues',
                'Mastering critical leadership competencies',
                'Building sustainable solutions and global network',
            ],
            skills: ['Leadership', 'Project Management', 'Sustainability', 'Social Impact'],
            startDate: '2024-10-01',
            endDate: '2025-01-01', // 3 Months
            isOngoing: false,
            location: 'Bandung',
            type: 'apprenticeship',
            logo: '/assets/aieseclogo.png',
            externalLink: 'https://www.instagram.com/aiesecbandung/',
        },
        {
            id: 'cert-4',
            company: 'Cyber Physical System Laboratory',
            position: 'CA Study Group Member',
            description: 'Active participant in complex technology projects including IoT, Web Apps, and ML.',
            responsibilities: [
                'Leading integration of hardware and software solutions',
                'Implementing Machine Learning in real-world scenarios',
                'Presenting final prototypes to stakeholders',
                'Collaborating in diverse teams for high-quality delivery',
            ],
            skills: ['IoT', 'System Integration', 'AI Research', 'Team Collaboration'],
            startDate: '2024-11-01',
            endDate: '2025-01-01', // 2 Months
            isOngoing: false,
            location: 'Bandung',
            type: 'contract',
            logo: '/assets/logocps.png',
        },
        {
            id: 'cert-5',
            company: 'GDSC Telkom University Bandung',
            position: 'Machine Learning Path Member',
            description: 'Active member in practical ML learning environment.',
            responsibilities: [
                'Mastering core ML concepts (regression, classification, clustering)',
                'Participating in technical workshops and training',
                'Building portfolio projects',
                'Collaborating to solve real-world problems',
            ],
            skills: ['Machine Learning', 'Python', 'Data Science', 'Problem Solving'],
            startDate: '2023-11-01',
            isOngoing: true,
            location: 'Bandung',
            type: 'contract',
            logo: '/assets/logogdsc.jpg',
            externalLink: 'https://g.dev/Aamod007',
        },
    ],
    education: [
        {
            id: 'edu-1',
            institution: 'Telkom University',
            degree: 'Bachelor of Technology',
            major: 'Information Technology',
            startDate: '2023-08-01',
            isOngoing: true,
            gpa: '7.3/10',
            activities: ['GDSC ML Path', 'CPS Lab Researcher', 'HMIT Academic', 'Data Science Competitions'],
            achievements: [
                'ML Project Final Score: 92/100',
                'Active in national data science competitions',
                'Research Assistant at multiple laboratories',
            ],
        },
        {
            id: 'edu-2',
            institution: 'SMAN 88 Jakarta',
            degree: 'High School Diploma',
            major: 'Science (IPA)',
            startDate: '2020-06-01',
            endDate: '2023-06-30',
            isOngoing: false,
            activities: ['Science Studies'],
            achievements: [
                'Strong foundation in mathematics and physics',
                'Analytical thinking development',
            ],
        },
    ],
    achievements: [
        // ── Certifications (newest → oldest) ──

        // --- 2026 ---
        {
            id: 'cert-1',
            title: 'Google Cloud Computing Foundations: Cloud Computing Fundamentals',
            issuer: 'Google Skills',
            date: '2026-10-24',
            image: '/certificate/MLLook.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/19508048',
            type: 'Course',
            tags: ['Google Cloud', 'ML'],
            category: 'certification',
        },
        {
            id: 'cert-2',
            title: 'Mitigate Threats and Vulnerabilities with Security Command Center',
            issuer: 'Google Skills',
            date: '2026-10-20',
            image: '/certificate/Migrate Threats.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/19323741',
            type: 'Course',
            tags: ['Google Cloud', 'Security'],
            category: 'certification',
        },
        {
            id: 'cert-3',
            title: 'Digital Transformation with Google Cloud',
            issuer: 'Google Skills',
            date: '2026-10-20',
            image: '/certificate/Digital Transformation.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/19319984',
            type: 'Course',
            tags: ['Google Cloud', 'Digital Transformation'],
            category: 'certification',
        },
        {
            id: 'cert-4',
            title: 'Develop Your Google Cloud Network',
            issuer: 'Google Skills',
            date: '2026-10-17',
            image: '/certificate/Develop.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/19241259',
            type: 'Course',
            tags: ['Google Cloud', 'Networking'],
            category: 'certification',
        },
        {
            id: 'cert-5',
            title: 'Manage Kubernetes in Google Cloud',
            issuer: 'Google Skills',
            date: '2026-10-17',
            image: '/certificate/Kubernetes.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/19319984',
            type: 'Course',
            tags: ['Google Cloud', 'Kubernetes', 'DevOps'],
            category: 'certification',
        },
        {
            id: 'cert-6',
            title: 'Implementing Cloud Load Balancing for Compute Engine',
            issuer: 'Google Skills',
            date: '2026-09-16',
            image: '/certificate/Cloud Load.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/18373350',
            type: 'Course',
            tags: ['Google Cloud', 'Load Balancing'],
            category: 'certification',
        },
        {
            id: 'cert-7',
            title: 'Organize and Govern Data with Knowledge Catalog',
            issuer: 'Google Skills',
            date: '2026-09-16',
            image: '/certificate/Dataplex.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/18372722',
            type: 'Course',
            tags: ['Google Cloud', 'Data Governance', 'Dataplex'],
            category: 'certification',
        },
        {
            id: 'badge-1',
            title: 'Google Home Developer Challenge 2025 - Participant',
            issuer: 'Google Developer Program',
            date: '2026-07-26',
            image: '/certificate/Home.png',
            credentialUrl: 'https://developers.google.com/profile/badges/events/google-home/2025/dev-challenge?u=Aamoddev',
            type: 'Badge',
            tags: ['Google', 'IoT', 'Smart Home'],
            category: 'certification',
        },
        {
            id: 'badge-2',
            title: 'Google Cloud & NVIDIA Community Member',
            issuer: 'Google Developer Program',
            date: '2026-07-26',
            image: '/certificate/Nvdia.png',
            credentialUrl: 'https://developers.google.com/profile/badges/nvidia-developer?u=Aamoddev',
            type: 'Badge',
            tags: ['Google Cloud', 'NVIDIA', 'AI'],
            category: 'certification',
        },
        {
            id: 'badge-3',
            title: 'Google Cloud Innovator',
            issuer: 'Google Developer Program',
            date: '2026-07-07',
            image: '/certificate/Innovator.png',
            credentialUrl: 'https://developers.google.com/profile/badges/community/innovators/cloud/2021_member?u=Aamoddev',
            type: 'Badge',
            tags: ['Google Cloud', 'Innovator'],
            category: 'certification',
        },
        {
            id: 'cert-8',
            title: 'Meshery Contributor',
            issuer: 'Meshery Maintainer',
            date: '2026-06-14',
            image: '/certificate/Certified_Meshery_Contributor_Certificate.pdf',
            credentialId: '5e1895f6-bc9a-46b5-9deb-1986f9cb95f8',
            credentialUrl: 'https://cloud.meshery.io/academy/certificates/5e1895f6-bc9a-46b5-9deb-1986f9cb95f8',
            type: 'Course',
            tags: ['Open Source', 'Meshery', 'Cloud Native'],
            category: 'certification',
        },
        {
            id: 'cert-9',
            title: 'Gen AI Agents: Transform Your Organization',
            issuer: 'Google Skills',
            date: '2026-05-30',
            image: '/certificate/Transform.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/17207211',
            type: 'Course',
            tags: ['AI', 'Gen AI', 'Google Cloud'],
            category: 'certification',
        },
        {
            id: 'cert-10',
            title: 'Gen AI Apps: Transform Your Work',
            issuer: 'Google Skills',
            date: '2026-05-30',
            image: '/certificate/Work.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/17207159',
            type: 'Course',
            tags: ['AI', 'Gen AI', 'Productivity'],
            category: 'certification',
        },
        {
            id: 'cert-11',
            title: 'Gen AI: Navigate the Landscape',
            issuer: 'Google Skills',
            date: '2026-05-30',
            image: '/certificate/Navigate.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/17207088',
            type: 'Course',
            tags: ['AI', 'Gen AI'],
            category: 'certification',
        },
        {
            id: 'cert-12',
            title: 'Gen AI: Unlock Foundational Concepts',
            issuer: 'Google Skills',
            date: '2026-05-30',
            image: '/certificate/Foundation.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/17207041',
            type: 'Course',
            tags: ['AI', 'Gen AI', 'Foundations'],
            category: 'certification',
        },
        {
            id: 'cert-13',
            title: 'Gen AI: Beyond the Chatbot',
            issuer: 'Google Skills',
            date: '2026-05-30',
            image: '/certificate/Chatbot.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/17206947',
            type: 'Course',
            tags: ['AI', 'Gen AI', 'Chatbot'],
            category: 'certification',
        },
        {
            id: 'cert-14',
            title: 'Open Source Connect Mentor',
            issuer: 'Open Source Connect',
            date: '2026-05-07',
            image: '/certificate/oscg-mentor-aamod-kumar.png',
            credentialUrl: 'https://app.truscholar.io/profile?credId=69fc92698e13fb4c33ca49e6',
            type: 'Mentor',
            tags: ['Open Source', 'Mentorship'],
            category: 'certification',
        },
        {
            id: 'cert-15',
            title: 'Engineer AI Agents with Agent Development Kit (ADK)',
            issuer: 'Google Skills',
            date: '2026-04-25',
            image: '/certificate/ADK.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/23796904',
            type: 'Course',
            tags: ['AI', 'Google Cloud', 'Agents', 'ADK'],
            category: 'certification',
        },
        {
            id: 'cert-16',
            title: 'Open Source Connect Global',
            issuer: 'Open Source Connect',
            date: '2026-04-15',
            image: '/certificate/OSCG_Workshop.pdf',
            credentialUrl: 'https://app.truscholar.io/profile?credId=69d5ba35a0a1d70eaf472a3f',
            type: 'Workshop',
            tags: ['Open Source', 'Workshop'],
            category: 'certification',
        },
        {
            id: 'cert-17',
            title: 'Open Source Connect Contributor',
            issuer: 'Open Source Connect',
            date: '2026-04-08',
            image: '/certificate/OSCG_Contributor.pdf',
            credentialUrl: 'https://app.truscholar.io/profile?credId=69d5ba35a0a1d70eaf472a3f',
            type: 'Contributor',
            tags: ['Open Source', 'Contribution'],
            category: 'certification',
        },
        {
            id: 'cert-18',
            title: 'Google Cloud Computing Foundations Certificate',
            issuer: 'Google Cloud',
            date: '2026-03-27',
            image: '/certificate/google-cloud-computing-foundations-certificate.png',
            credentialUrl: 'https://www.credly.com/badges/85b4315e-abdd-4ecb-b7c3-111eb7d307f9/linked_in?t=tcjpa2',
            type: 'Certificate',
            tags: ['Google Cloud', 'Foundations'],
            category: 'certification',
        },
        {
            id: 'cert-19',
            title: 'Google Cloud Computing Foundations: Infrastructure in Google Cloud',
            issuer: 'Google Skills',
            date: '2026-03-27',
            image: '/certificate/Infra Google Cloud.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/23284616',
            type: 'Course',
            tags: ['Google Cloud', 'Infrastructure'],
            category: 'certification',
        },
        {
            id: 'cert-20',
            title: 'Build a Secure Google Cloud Network',
            issuer: 'Google Skills',
            date: '2026-03-27',
            image: '/certificate/Network.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/23284073',
            type: 'Course',
            tags: ['Google Cloud', 'Networking', 'Security'],
            category: 'certification',
        },
        {
            id: 'cert-21',
            title: 'Set Up an App Dev Environment on Google Cloud',
            issuer: 'Google Skills',
            date: '2026-03-27',
            image: '/certificate/App dev.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/23283163',
            type: 'Course',
            tags: ['Google Cloud', 'App Dev'],
            category: 'certification',
        },
        {
            id: 'badge-4',
            title: 'GirlScript Summer of Code - Mentor',
            issuer: 'GirlScript Summer of Code',
            date: '2026-03-26',
            image: '/certificate/gssoc-badge-role_mentor.png',
            credentialUrl: 'https://gssoc.girlscript.org/profile/7bf4e595-478d-4a73-a094-d1c49416c546',
            type: 'Mentor',
            tags: ['Open Source', 'GSSoC', 'Mentorship'],
            category: 'certification',
        },
        {
            id: 'cert-22',
            title: 'Prepare Data for ML APIs on Google Cloud',
            issuer: 'Google Skills',
            date: '2026-03-26',
            image: '/certificate/ML Google Cloud.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/23259146',
            type: 'Course',
            tags: ['Google Cloud', 'ML', 'APIs'],
            category: 'certification',
        },
        {
            id: 'cert-23',
            title: 'Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud',
            issuer: 'Google Skills',
            date: '2026-03-24',
            image: '/certificate/DataMLAI.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/23211094',
            type: 'Course',
            tags: ['Google Cloud', 'Data', 'ML', 'AI'],
            category: 'certification',
        },
        {
            id: 'cert-24',
            title: 'Google Cloud Computing Foundations: Networking & Security in Google Cloud',
            issuer: 'Google Skills',
            date: '2026-03-24',
            image: '/certificate/NetworkingSecurity.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/23207622',
            type: 'Course',
            tags: ['Google Cloud', 'Networking', 'Security'],
            category: 'certification',
        },
        {
            id: 'cert-25',
            title: 'Google Cloud Computing Foundations: Cloud Computing Fundamentals',
            issuer: 'Google Skills',
            date: '2026-03-23',
            image: '/certificate/Cloud Computing.png',
            credentialUrl: 'https://www.skills.google/public_profiles/cc7bfafc-38af-4e28-9145-5edad6b9c8c5/badges/23196472',
            type: 'Course',
            tags: ['Google Cloud', 'Cloud Computing'],
            category: 'certification',
        },

        // --- 2025 ---
        {
            id: 'cert-26',
            title: 'Social Summer of Code - Contributor',
            issuer: 'Social Summer of Code',
            date: '2025-12-29',
            image: '/certificate/ssoc-s5-contributor-Aamod007.png',
            type: 'Contributor',
            tags: ['Open Source', 'SSoC'],
            category: 'certification',
        },
        {
            id: 'cert-27',
            title: 'EliteCoders Winter of Code - Contributor',
            issuer: 'EliteCoders',
            date: '2025-12-28',
            image: '/certificate/ECWOC.pdf',
            credentialId: 'ECW-2026-937503',
            credentialUrl: 'https://app.truscholar.io/profile?credId=69bf6f8b34fff71acf18a9f2',
            type: 'Contribution',
            tags: ['Open Source', 'ECWoC'],
            category: 'certification',
        },
        {
            id: 'cert-28',
            title: 'Social Summer of Code - Mentor',
            issuer: 'Social Summer of Code',
            date: '2025-12-26',
            image: '/certificate/ssoc-s5-mentor-Aamod007.png',
            type: 'Mentor',
            tags: ['Open Source', 'SSoC', 'Mentorship'],
            category: 'certification',
        },
        {
            id: 'cert-29',
            title: 'Social Winter of Code - Mentor',
            issuer: 'Social Winter of Code',
            date: '2025-12-26',
            image: '/certificate/SWOC26-MENT-Aamod_Kumar.png',
            credentialId: '12a90b218b849417aaf55ec49398b665aam',
            credentialUrl: 'https://platform.swoc.in/certificates/MENT/12a90b218b849417aaf55ec49398b665aam',
            type: 'Mentor',
            tags: ['Open Source', 'SWoC', 'Mentorship'],
            category: 'certification',
        },
        {
            id: 'cert-30',
            title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
            issuer: 'Oracle',
            date: '2025-10-28',
            image: '/certificate/OCI25AICFA.jpeg',
            credentialId: '103009955OCI25AICFA',
            credentialUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D97B831C0029DC1C98B0B1E413622B0D2BCC90EBC1F38FDC86F60AA04725A656',
            type: 'Certification',
            tags: ['Oracle', 'Cloud', 'AI'],
            category: 'certification',
        },

        {
            id: 'cert-32',
            title: 'GirlScript Summer of Code 2025 - Contributor',
            issuer: 'GirlScript Summer of Code',
            date: '2025-09-29',
            image: '/certificate/GSSoC.jpeg',
            type: 'Contributor',
            tags: ['Open Source', 'GSSoC'],
            category: 'certification',
        },
        {
            id: 'cert-33',
            title: 'Web-e-stan',
            issuer: 'Web-e-stan',
            date: '2024-01-01',
            image: '/certificate/Web-e-stan.pdf',
            type: 'Certificate',
            tags: ['Web Development'],
            category: 'certification',
        },
        {
            id: 'cert-34',
            title: 'Adobe Certificate',
            issuer: 'Adobe',
            date: '2024-01-01',
            image: '/certificate/Adobe.pdf',
            type: 'Certificate',
            tags: ['Adobe', 'Design'],
            category: 'award',
        },
    ],
    techStack: [
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python', category: 'language' },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript', category: 'language' },
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript', category: 'language' },
        { name: 'Solidity', icon: 'https://cdn.simpleicons.org/solidity', category: 'language' },
        { name: 'React', icon: 'https://cdn.simpleicons.org/react', category: 'framework' },
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs', category: 'framework' },
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs', category: 'framework' },
        { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow', category: 'library' },
        { name: 'Scikit-learn', icon: 'https://cdn.simpleicons.org/scikitlearn', category: 'library' },
        { name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas', category: 'library' },
        { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy', category: 'library' },
        { name: 'Matplotlib', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg', category: 'library' }, // Matplotlib not on simpleicons sometimes or generic
        { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss', category: 'library' },
        { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis', category: 'database' },
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql', category: 'database' },
        { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes', category: 'tool' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', category: 'tool' },
        { name: 'Terraform', icon: 'https://cdn.simpleicons.org/terraform', category: 'tool' },
        { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain', category: 'library' },
        { name: 'Mistral AI', icon: 'https://cdn.simpleicons.org/mistralai', category: 'library' },
        { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch', category: 'library' },
        { name: 'OpenCV', icon: 'https://cdn.simpleicons.org/opencv', category: 'library' },
        { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi', category: 'framework' },
        { name: 'Flask', icon: 'https://cdn.simpleicons.org/flask', category: 'framework' },
    ],
    hardSkills: [
        { name: 'System Architecture', level: 'intermediate', category: 'software', description: 'Designing robust, scalable, and high-performance system architectures for complex applications.' },

        { name: 'AI Agents & Autonomy', level: 'beginner', category: 'ai', description: 'Designing autonomous systems with recursive reasoning and decision-making capabilities.' },
        { name: 'Large Language Models (LLM)', level: 'intermediate', category: 'ai', description: 'Expertise in fine-tuning open-source models, RAG architectures, and complex prompt engineering.' },
        { name: 'Data Science', level: 'expert', category: 'ai', description: 'Advanced statistical analysis and predictive modeling to extract actionable insights from big data.' },
        { name: 'Deep Learning (CV/NLP)', level: 'advanced', category: 'ai', description: 'Architecting deep neural networks for complex computer vision and natural language tasks.' },
        { name: 'Computer Vision', level: 'intermediate', category: 'ai', description: 'Developing real-time object detection, pattern recognition, and spatial analysis systems.' },
        { name: 'Machine Learning Ops', level: 'advanced', category: 'ai', description: 'Implementing robust pipelines for model training, deployment, and performance monitoring.' },
        { name: 'DevOps', level: 'advanced', category: 'devops', description: 'Streamlining development workflows and infrastructure management through automation.' },
        { name: 'Full Stack Development', level: 'expert', category: 'software', description: 'Engineering scalable web architectures from pixel-perfect frontends to robust databases.' },
        { name: 'System Analysis', level: 'advanced', category: 'software', description: 'Translating complex stakeholder requirements into efficient and scalable technical blueprints.' },
        { name: 'SDLC', level: 'intermediate', category: 'software', description: 'Governing the entire life cycle of software development with a focus on quality and agility.' },
        { name: 'Software Design', level: 'advanced', category: 'software', description: 'Applying architectural patterns and principles to build maintainable and modular systems.' },
        { name: 'Requirement Specifications', level: 'advanced', category: 'software', description: 'Defining clear, precise, and actionable technical documentation for engineering teams.' },
        { name: 'Data Analytics', level: 'advanced', category: 'data', description: 'Transforming raw data into meaningful visualizations and strategic intelligence.' },
        { name: 'Data Visualization', level: 'expert', category: 'data', description: 'Crafting intuitive and interactive dashboards to communicate complex data findings.' },
        { name: 'SQL & DBMS', level: 'expert', category: 'data', description: 'Architecting and optimizing relational database schemas for high-performance applications.' },
        { name: 'Docker & Kubernetes', level: 'intermediate', category: 'devops', description: 'Containerizing applications for consistent deployment and orchestrating cloud resources.' },

        // Other Technical Skills
        { name: 'Wazuh', level: 'beginner', category: 'other', description: 'Exploring open-source security monitoring for threat detection and compliance.' },
        { name: 'Network Traffic Analysis', level: 'beginner', category: 'other', description: 'Analyzing packet captures to identify anomalies and optimize network performance.' },
        { name: 'Socket Programming', level: 'expert', category: 'other', description: 'Implementing low-level network communication protocols for real-time data transfer.' },
        { name: 'Google Cloud Platform', level: 'beginner', category: 'other', description: 'Utilizing cloud infrastructure and services for scalable application hosting.' },
        { name: 'Solidity', level: 'beginner', category: 'other', description: 'Writing secure smart contracts for decentralized applications on Ethereum.' },
        { name: 'Decentralized Applications (DApps)', level: 'beginner', category: 'other', description: 'Developing web applications that interact with blockchain smart contracts.' },
        { name: 'Blockchain Architecture', level: 'beginner', category: 'other', description: 'Understanding the fundamental principles of distributed ledger technologies.' },
    ],
    softSkills: [
        { name: 'Problem Solving', description: 'Innovative debugging and algorithmic optimization' },
        { name: 'Systemic Thinking', description: 'Designing robust, scalable end-to-end architectures' },
        { name: 'Critical Thinking', description: 'Analytical approach to solving complex engineering challenges' },
        { name: 'Continuous Learning', description: 'Staying updated with state-of-the-art AI research' },
        { name: 'Analytical Thinking', description: 'Breaking down complex data into actionable insights' },
        { name: 'Adaptability', description: 'Quickly mastering new frameworks and AI models' },
        { name: 'Leadership', description: 'Leading engineering teams and managing complex projects' },
        { name: 'Communication', description: 'Translating complex AI concepts for stakeholders' },
        { name: 'Teamwork', description: 'Collaborative development in cross-functional agile teams' },
        { name: 'Research Skills', description: 'In-depth literature review and academic contribution' },
    ],
    tools: [
        { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', category: 'ide' },
        { name: 'Jupyter', icon: 'https://cdn.simpleicons.org/jupyter', category: 'ide' },
        { name: 'Google Colab', icon: 'https://cdn.simpleicons.org/googlecolab', category: 'ide' },
        { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma', category: 'design' },
        { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github', category: 'devops' }, // Default black, handled by dark:invert in component
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git', category: 'devops' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', category: 'devops' },
        { name: 'Conda', icon: 'https://cdn.simpleicons.org/anaconda', category: 'devops' },
        { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux', category: 'devops' },
        { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman', category: 'devops' },
    ],
    faqs: [
        {
            question: 'What services do you offer?',
            answer: 'I specialize in Full Stack Development (React, Next.js, Node.js), AI/ML Development (TensorFlow, Computer Vision, NLP), Data Science, and Blockchain/Web3 development (Solidity, Smart Contracts, DApps).',
        },
        {
            question: 'What technologies are you exploring?',
            answer: 'Currently diving deep into AI Agents, Blockchain technology (Solidity, Smart Contracts), and MLOps for production-ready AI systems.',
        },
        {
            question: 'Are you available for opportunities?',
            answer: 'Yes! I\'m open to internships, collaborations, and exciting projects in AI, Data Science, Full Stack Development, and Blockchain. Feel free to reach out!',
        },
    ],
    blogs: [
        {
            id: 'blog-1',
            slug: 'future-of-ai-agents',
            title: 'The Future of AI Agents in Enterprise',
            excerpt: 'How autonomous agents are redefining software architecture and decision-making processes.',
            content: 'Detailed exploration of AI agents...',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
            date: '2026-03-20',
            category: 'applied-ai',
            tags: ['AI', 'Agents', 'Enterprise'],
            author: { name: 'Aamod', avatar: '/about/ak.jpeg' },
            readTime: '5'
        },
        {
            id: 'blog-2',
            slug: 'web3-ux-challenges',
            title: 'Overcoming Web3 UX Challenges',
            excerpt: 'Strategies for building decentralized applications that feel as smooth as Web2.',
            content: 'UX in Web3 is critical...',
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop',
            date: '2026-03-15',
            category: 'more',
            tags: ['Web3', 'Blockchain', 'UX'],
            author: { name: 'Aamod', avatar: '/about/ak.jpeg' },
            readTime: '4'
        },
        {
            id: 'blog-3',
            slug: 'mastering-nextjs-performance',
            title: 'Mastering Next.js Performance',
            excerpt: 'Advanced techniques for optimizing Core Web Vitals in modern React applications.',
            content: 'Performance optimization...',
            image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2000&auto=format&fit=crop',
            date: '2026-03-05',
            category: 'software-development',
            tags: ['Next.js', 'React', 'Performance'],
            author: { name: 'Aamod', avatar: '/about/ak.jpeg' },
            readTime: '6'
        },
        {
            id: 'blog-4',
            slug: 'ai-driven-security',
            title: 'AI-Driven Cybersecurity',
            excerpt: 'Using deep learning to detect and prevent modern network intrusion.',
            content: 'Cybersecurity with AI...',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
            date: '2026-02-28',
            category: 'applied-ai',
            tags: ['AI', 'Security', 'Deep Learning'],
            author: { name: 'Aamod', avatar: '/about/ak.jpeg' },
            readTime: '7'
        },
        {
            id: 'blog-5',
            slug: 'llm-fine-tuning',
            title: 'Fine-Tuning LLMs locally',
            excerpt: 'A guide to optimizing open-source models using Ollama and LoRA techniques.',
            content: 'Local LLM fine-tuning...',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop',
            date: '2026-02-15',
            category: 'applied-ai',
            tags: ['LLM', 'Python', 'Ollama'],
            author: { name: 'Aamod', avatar: '/about/ak.jpeg' },
            readTime: '8'
        },
        {
            id: 'blog-6',
            slug: 'smart-contract-security',
            title: 'Smart Contract Audit Patterns',
            excerpt: 'Common vulnerabilities and how to prevent them in Solidity.',
            content: 'Audit patterns...',
            image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop',
            date: '2026-02-01',
            category: 'more',
            tags: ['Solidity', 'Ethereum', 'Security'],
            author: { name: 'Aamod', avatar: '/about/ak.jpeg' },
            readTime: '5'
        },
        {
            id: 'blog-7',
            slug: 'modern-state-management',
            title: 'Modern State Management in React',
            excerpt: 'Comparing Zustand, Redux Toolkit, and React Context for large-scale apps.',
            content: 'State management...',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop',
            date: '2026-01-25',
            category: 'software-development',
            tags: ['React', 'Zustand', 'Architecture'],
            author: { name: 'Aamod', avatar: '/about/ak.jpeg' },
            readTime: '4'
        },
        {
            id: 'blog-8',
            slug: 'iot-edge-computing',
            title: 'Edge Computing with ESP32',
            excerpt: 'Implementing real-time data processing at the edge for industrial IoT.',
            content: 'Edge computing...',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
            date: '2026-01-10',
            category: 'software-development',
            tags: ['IoT', 'ESP32', 'Edge'],
            author: { name: 'Aamod', avatar: '/about/ak.jpeg' },
            readTime: '6'
        },
        {
            id: 'blog-9',
            slug: 'ai-in-healthcare',
            title: 'AI Transformation in Healthcare',
            excerpt: 'How computer vision is assisting in medical diagnostics and data analysis.',
            content: 'Healthcare AI...',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop',
            date: '2026-01-05',
            category: 'applied-ai',
            tags: ['Healthcare', 'AI', 'Ethics'],
            author: { name: 'Aamod', avatar: '/about/ak.jpeg' },
            readTime: '7'
        },
        {
            id: 'blog-10',
            slug: 'the-architects-manifesto',
            title: "Digital Garden: The Architect's Manifesto",
            excerpt: "Reflecting on my journey as an AI Engineer and the philosophy behind building intelligent, scalable systems.",
            content: "My journey into the world of technology hasn't been just about code...",
            image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop',
            date: '2026-03-31',
            category: 'about-me',
            tags: ['Philosophy', 'Engineering', 'About Me'],
            author: { name: 'Aamod', avatar: '/about/ak.jpeg' },
            readTime: '5'
        }
    ],
    gallery: [
        {
            id: 'gal-1',
            title: 'CPS Lab Research',
            description: 'Deep Learning research workshop at Cyber Physical System Laboratory.',
            date: '2025-01-20',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
            category: 'research'
        },
        {
            id: 'gal-2',
            title: 'Smart City Symposium',
            description: 'Presenting AIoT solutions for sustainable urban development.',
            date: '2024-12-15',
            type: 'video',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
            thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
            category: 'event'
        },
        {
            id: 'gal-3',
            title: 'Neural Network Visualization',
            description: 'Custom visualization of a Convolutional Neural Network architecture.',
            date: '2024-11-30',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2000&auto=format&fit=crop',
            category: 'technical'
        },
        {
            id: 'gal-4',
            title: 'Blockchain Hackathon',
            description: 'Building decentralized finance solutions in 48 hours.',
            date: '2024-10-25',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2000&auto=format&fit=crop',
            category: 'event'
        },
        {
            id: 'gal-5',
            title: 'IoT Prototype Demo',
            description: 'Testing real-time sensor integration with cloud platforms.',
            date: '2024-09-15',
            type: 'video',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
            category: 'technical'
        }
    ],
};
