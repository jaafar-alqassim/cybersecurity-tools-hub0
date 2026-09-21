/*
 * Cyber Security Tools Hub - tools dataset
 * 152 tools across 52 categories. Official links only.
 *
 * To contribute: add/edit entries below, keeping the schema:
 *   Category: { name, icon, color, tools[] }
 *   Tool:     { name, icon, tag, desc, url, url2?, url2Label?, url2Icon?, url2Style? }
 *   Icons are Font Awesome 6 (free) class names, colors are hex.
 */
export const DATA = [
    /* ── 1. Active Directory & Identity Security ─────────── */
    {
        name: "Active Directory & Identity Security",
        icon: "fa-sitemap",
        color: "#8b5cf6",
        tools: [
            {
                name: "BloodHound",
                icon: "fa-paw",
                tag:  "Attack Path Mapping",
                desc: "Graph-based analysis tool that maps and visualizes hidden attack paths and privilege-escalation relationships within Active Directory and Azure environments.",
                url:  "https://github.com/SpecterOps/BloodHound",
            },
            {
                name: "Mimikatz",
                icon: "fa-key",
                tag:  "Credential Extraction",
                desc: "Well-known post-exploitation tool for extracting plaintext passwords, hashes, and Kerberos tickets directly from Windows memory.",
                url:  "https://github.com/gentilkiwi/mimikatz",
            },
            {
                name: "PowerShell Empire",
                icon: "fa-terminal",
                tag:  "AD Attack Framework",
                desc: "Post-exploitation and command-and-control framework built around PowerShell and Python agents, widely used for attacking Active Directory environments.",
                url:  "https://github.com/BC-SECURITY/Empire",
            },
            {
                name: "Rubeus",
                icon: "fa-ticket",
                tag:  "Kerberos Abuse",
                desc: "C# toolset for raw Kerberos interaction and abuse, supporting ticket harvesting, Kerberoasting, and other identity-security testing techniques.",
                url:  "https://github.com/GhostPack/Rubeus",
            }
        ]
    },
    /* ── 2. Advanced Malware Analysis & Sandboxing ───────── */
    {
        name: "Advanced Malware Analysis & Sandboxing",
        icon: "fa-flask-vial",
        color: "#b91c1c",
        tools: [
            {
                name: "Any.Run",
                icon: "fa-play",
                tag:  "Interactive Sandbox",
                desc: "Interactive cloud-based malware sandbox that lets analysts observe and interact with samples in real time while capturing network, process, and registry activity.",
                url:  "https://any.run/",
            },
            {
                name: "Joe Sandbox",
                icon: "fa-cloud",
                tag:  "Cloud Malware Analysis",
                desc: "Deep malware analysis platform that combines static, dynamic, and hybrid analysis techniques to detect and classify advanced threats across files and URLs.",
                url:  "https://www.joesecurity.org/",
            },
            {
                name: "VMRay",
                icon: "fa-magnifying-glass",
                tag:  "Advanced Malware Detection",
                desc: "Agentless hypervisor-based malware analysis platform designed to evade sandbox-detection techniques while extracting detailed behavioral indicators.",
                url:  "https://www.vmray.com/",
            }
        ]
    },
    /* ── 3. Advanced Reverse Engineering ───────────────── */
    {
        name: "Advanced Reverse Engineering",
        icon: "fa-microchip",
        color: "#f97316",
        tools: [
            {
                name: "Binary Ninja",
                icon: "fa-code",
                tag:  "Disassembler",
                desc: "Commercial interactive disassembler and decompiler built for reverse engineers, offering a programmable API, IL lifting, and collaborative analysis features.",
                url:  "https://binary.ninja/",
            },
            {
                name: "x64dbg",
                icon: "fa-bug",
                tag:  "Debugger",
                desc: "Open-source x64/x32 debugger for Windows designed for malware analysis and reverse engineering, featuring a clean interface and extensive plugin support.",
                url:  "https://x64dbg.com/",
            }
        ]
    },
    /* ── 4. Advanced Threat Hunting ───────────────────────── */
    {
        name: "Advanced Threat Hunting",
        icon: "fa-binoculars",
        color: "#4f46e5",
        tools: [
            {
                name: "MozDef",
                icon: "fa-shield",
                tag:  "Threat Hunting Platform",
                desc: "Mozilla's automated security incident handling platform that collects and correlates alerts to speed up detection, triage, and response for security teams.",
                url:  "https://github.com/mozilla/MozDef",
            },
            {
                name: "TheHive",
                icon: "fa-diagram-project",
                tag:  "Incident Response",
                desc: "Scalable, open-source security incident response platform for SOC and CSIRT teams to collaboratively triage alerts and manage the full investigation lifecycle.",
                url:  "https://strangebee.com/thehive/",
            },
            {
                name: "ThreatMiner",
                icon: "fa-magnifying-glass-chart",
                tag:  "Threat Intelligence Portal",
                desc: "Free threat intelligence portal that lets analysts research indicators of compromise, pivot across related data, and enrich investigations without needing to write code.",
                url:  "https://www.threatminer.org/",
            }
        ]
    },
    /* ── 5. AI & Machine Learning Security ───────────────── */
    {
        name: "AI & Machine Learning Security",
        icon: "fa-robot",
        color: "#ec4899",
        tools: [
            {
                name: "Adversarial Robustness Toolbox",
                icon: "fa-shield-halved",
                tag:  "ML Security Testing",
                desc: "Open-source Python library by IBM/Trusted-AI for evaluating and defending machine learning models against adversarial threats such as evasion and poisoning attacks.",
                url:  "https://github.com/Trusted-AI/adversarial-robustness-toolbox",
            },
            {
                name: "Fawkes",
                icon: "fa-mask",
                tag:  "Facial Recognition Protection",
                desc: "Privacy tool developed at the University of Chicago that subtly perturbs photos to cloak them against unauthorized facial recognition model training.",
                url:  "https://github.com/Secure-AI-Systems/Fawkes",
            },
            {
                name: "TensorFlow Privacy",
                icon: "fa-lock",
                tag:  "ML Privacy Protection",
                desc: "Library for training machine learning models with differential privacy, helping protect sensitive data used during the training process.",
                url:  "https://github.com/tensorflow/privacy",
            }
        ]
    },
    /* ── 6. Binary Analysis & Exploit Development ────────── */
    {
        name: "Binary Analysis & Exploit Development",
        icon: "fa-bomb",
        color: "#dc2626",
        tools: [
            {
                name: "Binary Analysis Platform (BAP)",
                icon: "fa-diagram-project",
                tag:  "Binary Analysis",
                desc: "OCaml-based framework for automated binary analysis, providing a platform for building program analysis tools on top of a common binary lifting infrastructure.",
                url:  "https://github.com/BinaryAnalysisPlatform/bap",
            },
            {
                name: "GEF (GDB Enhanced Features)",
                icon: "fa-bug",
                tag:  "Binary Exploitation",
                desc: "GDB plugin that adds advanced debugging and exploit-development features tailored for reverse engineers and binary exploitation researchers.",
                url:  "https://github.com/hugsy/gef",
            },
            {
                name: "Pwntools",
                icon: "fa-flask",
                tag:  "Exploit Development",
                desc: "CTF-oriented Python library that streamlines writing exploits, offering utilities for binary interaction, shellcode generation, and remote/local process handling.",
                url:  "https://github.com/Gallopsled/pwntools",
            },
            {
                name: "Radare2",
                icon: "fa-microscope",
                tag:  "Reverse Engineering",
                desc: "Free and open-source reverse engineering framework offering disassembly, debugging, binary patching, and scripting capabilities for a wide range of architectures.",
                url:  "https://rada.re/n/",
            },
            {
                name: "ROPgadget",
                icon: "fa-puzzle-piece",
                tag:  "ROP Gadget Search",
                desc: "Tool for searching binaries for ROP (return-oriented programming) gadgets, helping exploit developers build gadget chains to bypass modern mitigations.",
                url:  "https://github.com/JonathanSalwan/ROPgadget",
            }
        ]
    },
    /* ── 7. Biometric & Identity Security ────────────────── */
    {
        name: "Biometric & Identity Security",
        icon: "fa-fingerprint",
        color: "#db2777",
        tools: [
            {
                name: "BioAPI",
                icon: "fa-fingerprint",
                tag:  "Biometric API Standard",
                desc: "ISO/IEC standard (19784-1) defining an interoperable API/SPI for building biometric systems from components sourced across multiple vendors.",
                url:  "https://www.bioapi.org/",
            },
            {
                name: "FaceRecognition",
                icon: "fa-user",
                tag:  "Python Face Recognition",
                desc: "Simple Python library and command-line tool built on dlib for recognizing and manipulating faces, commonly used for prototyping biometric security research.",
                url:  "https://github.com/ageitgey/face_recognition",
            },
            {
                name: "OpenCV",
                icon: "fa-eye",
                tag:  "Computer Vision & Biometrics",
                desc: "Comprehensive open-source computer vision library used to build facial recognition, liveness detection, and other biometric security pipelines.",
                url:  "https://opencv.org/",
            }
        ]
    },
    /* ── 8. Blockchain & Cryptocurrency Security ─────────── */
    {
        name: "Blockchain & Cryptocurrency Security",
        icon: "fa-link",
        color: "#f59e0b",
        tools: [
            {
                name: "Echidna",
                icon: "fa-vial",
                tag:  "Fuzzer",
                desc: "Property-based fuzzing tool by Trail of Bits for Ethereum smart contracts, generating random call sequences to falsify user-defined invariants and assertions.",
                url:  "https://github.com/crytic/echidna",
            },
            {
                name: "Mythril",
                icon: "fa-magnifying-glass",
                tag:  "Symbolic Execution",
                desc: "Security analysis tool for EVM bytecode that uses symbolic execution, SMT solving, and taint analysis to detect vulnerabilities in smart contracts.",
                url:  "https://github.com/Consensys/mythril",
            },
            {
                name: "Slither",
                icon: "fa-bug",
                tag:  "Static Analysis",
                desc: "Static analysis framework for Solidity and Vyper that detects vulnerabilities, optimizes gas usage, and improves code understanding of smart contracts.",
                url:  "https://github.com/crytic/slither",
            }
        ]
    },
    /* ── 9. Blockchain Threat Intelligence ───────────────── */
    {
        name: "Blockchain Threat Intelligence",
        icon: "fa-link",
        color: "#d97706",
        tools: [
            {
                name: "BlockSec",
                icon: "fa-shield-halved",
                tag:  "Onchain Security Monitoring",
                desc: "Web3 security platform providing real-time attack monitoring, automatic hack blocking, and fund-flow investigation tools for blockchain protocols.",
                url:  "https://blocksec.com/",
            },
            {
                name: "Merkle Science",
                icon: "fa-chart-line",
                tag:  "Blockchain Threat Intelligence",
                desc: "AI-powered blockchain analytics and predictive risk platform used by regulators and financial institutions to trace and prevent illicit crypto activity.",
                url:  "https://www.merklescience.com/",
            }
        ]
    },
    /* ── 10. Browser Security & Privacy ──────────────────── */
    {
        name: "Browser Security & Privacy",
        icon: "fa-globe",
        color: "#0284c7",
        tools: [
            {
                name: "NoScript",
                icon: "fa-ban",
                tag:  "Browser Script Blocker",
                desc: "Browser extension that selectively blocks JavaScript, Flash, and other executable content, protecting against XSS, clickjacking, and drive-by attacks.",
                url:  "https://noscript.net/",
            },
            {
                name: "Privacy Badger",
                icon: "fa-user-shield",
                tag:  "Privacy Protection",
                desc: "EFF-developed browser extension that automatically learns to block invisible trackers based on their behavior across the web.",
                url:  "https://privacybadger.org/",
            },
            {
                name: "uBlock Origin",
                icon: "fa-filter",
                tag:  "Ad/Tracker Blocker",
                desc: "Efficient, open-source content blocker that filters ads, trackers, and malware domains using flexible filter lists with a low resource footprint.",
                url:  "https://ublockorigin.com/",
            }
        ]
    },
    /* ── 11. Cloud Security & Container Security ──────────── */
    {
        name: "Cloud Security & Container Security",
        icon: "fa-cloud",
        color: "#0ea5e9",
        tools: [
            {
                name: "CloudSploit",
                icon: "fa-cloud-bolt",
                tag:  "CSPM",
                desc: "Open-source cloud security posture management tool that scans AWS, Azure, GCP, and Oracle Cloud accounts for misconfigurations and security risks.",
                url:  "https://github.com/aquasecurity/cloudsploit",
            },
            {
                name: "Falco",
                icon: "fa-binoculars",
                tag:  "Runtime Security",
                desc: "Cloud-native runtime security tool that detects unexpected application behavior and alerts on threats in real time across containers and Kubernetes.",
                url:  "https://falco.org/",
            },
            {
                name: "Prowler",
                icon: "fa-check-double",
                tag:  "Cloud Audit",
                desc: "Open-source security auditing tool for AWS, Azure, and GCP that performs hardening and compliance checks against CIS, NIST, and other benchmarks.",
                url:  "https://prowler.com/",
            },
            {
                name: "Trivy",
                icon: "fa-box",
                tag:  "Vuln Scanner",
                desc: "All-in-one open-source scanner for finding vulnerabilities, misconfigurations, and secrets in container images, filesystems, and Kubernetes clusters.",
                url:  "https://trivy.dev/",
            }
        ]
    },
    /* ── 12. Code Security & Obfuscation ──────────────────── */
    {
        name: "Code Security & Obfuscation",
        icon: "fa-mask",
        color: "#3b82f6",
        tools: [
            {
                name: "ConfuserEx",
                icon: "fa-shuffle",
                tag:  ".NET Obfuscator",
                desc: "Open-source protector for .NET applications that obfuscates and hardens assemblies against reverse engineering and tampering.",
                url:  "https://github.com/mkaring/ConfuserEx",
            },
            {
                name: "Obfuscator-LLVM",
                icon: "fa-code",
                tag:  "C/C++ Obfuscator",
                desc: "LLVM-based compiler extension that provides code obfuscation and tamper-proofing for C/C++ and Objective-C applications at the intermediate-representation level.",
                url:  "https://github.com/obfuscator-llvm/obfuscator",
            },
            {
                name: "ProGuard",
                icon: "fa-mobile-screen",
                tag:  "Android Obfuscator",
                desc: "Java and Android bytecode shrinker, optimizer, and obfuscator that protects applications from reverse engineering while reducing app size.",
                url:  "https://www.guardsquare.com/proguard",
            }
        ]
    },
    /* ── 13. Container & Kubernetes Security ──────────────── */
    {
        name: "Container & Kubernetes Security",
        icon: "fa-ship",
        color: "#0891b2",
        tools: [
            {
                name: "Kube-bench",
                icon: "fa-clipboard-check",
                tag:  "K8s CIS Benchmark",
                desc: "Tool that checks whether Kubernetes clusters are deployed securely by running checks documented in the CIS Kubernetes Benchmark.",
                url:  "https://github.com/aquasecurity/kube-bench",
            },
            {
                name: "Kube-hunter",
                icon: "fa-magnifying-glass",
                tag:  "K8s Vulnerability Hunting",
                desc: "Open-source tool that hunts for security weaknesses in Kubernetes clusters, testing them from inside or outside the cluster network.",
                url:  "https://github.com/aquasecurity/kube-hunter",
            },
            {
                name: "Kubescape",
                icon: "fa-shield",
                tag:  "K8s Security Scanning",
                desc: "Open-source Kubernetes security platform that scans clusters, YAML files, and Helm charts for misconfigurations, vulnerabilities, and compliance risks.",
                url:  "https://kubescape.io/",
            },
            {
                name: "Tetragon",
                icon: "fa-eye",
                tag:  "Runtime Security",
                desc: "eBPF-based security observability and runtime enforcement tool by Cilium that provides real-time visibility into process execution and system calls.",
                url:  "https://github.com/cilium/tetragon",
            }
        ]
    },
    /* ── 14. Database Security ────────────────────────────── */
    {
        name: "Database Security",
        icon: "fa-database",
        color: "#7c3aed",
        tools: [
            {
                name: "MySQL Enterprise Audit",
                icon: "fa-database",
                tag:  "MySQL Auditing",
                desc: "Enterprise plugin for MySQL that provides detailed audit logging of database activity to support compliance and security monitoring requirements.",
                url:  "https://www.mysql.com/products/enterprise/audit.html",
            },
            {
                name: "pgAudit",
                icon: "fa-file-lines",
                tag:  "PostgreSQL Auditing",
                desc: "PostgreSQL extension that provides detailed session and object audit logging, helping meet compliance requirements for database activity tracking.",
                url:  "https://www.pgaudit.org/",
            }
        ]
    },
    /* ── 15. DevSecOps & CI/CD Security ───────────────────── */
    {
        name: "DevSecOps & CI/CD Security",
        icon: "fa-infinity",
        color: "#14b8a6",
        tools: [
            {
                name: "OWASP Dependency-Check",
                icon: "fa-list-check",
                tag:  "SCA",
                desc: "Software composition analysis tool that identifies publicly disclosed vulnerabilities in a project's dependencies as part of the build pipeline.",
                url:  "https://owasp.org/www-project-dependency-check/",
            },
            {
                name: "Snyk",
                icon: "fa-bug",
                tag:  "Dependency Scanner",
                desc: "Developer-first security platform that finds and fixes vulnerabilities in open-source dependencies, containers, and infrastructure-as-code within CI/CD pipelines.",
                url:  "https://snyk.io/",
            },
            {
                name: "SonarQube",
                icon: "fa-magnifying-glass-chart",
                tag:  "Code Quality",
                desc: "Continuous code quality and security inspection platform that detects bugs, vulnerabilities, and code smells across dozens of programming languages.",
                url:  "https://www.sonarsource.com/products/sonarqube/",
            },
            {
                name: "Trivy",
                icon: "fa-box",
                tag:  "Vuln Scanner",
                desc: "Comprehensive scanner integrated into CI/CD pipelines to catch vulnerabilities, misconfigurations, and secrets in containers and infrastructure-as-code before deployment.",
                url:  "https://trivy.dev/",
            }
        ]
    },
    /* ── 16. Digital Forensics & Memory Analysis ─────────── */
    {
        name: "Digital Forensics & Memory Analysis",
        icon: "fa-microscope",
        color: "#10b981",
        tools: [
            {
                name: "Autopsy",
                icon: "fa-folder-open",
                tag:  "Disk Forensics",
                desc: "Open-source digital forensics platform and graphical front-end to The Sleuth Kit, used by law enforcement and investigators to analyze disk images and recover evidence.",
                url:  "https://www.autopsy.com/",
            },
            {
                name: "Volatility",
                icon: "fa-memory",
                tag:  "Memory Analysis",
                desc: "Advanced open-source framework for volatile memory forensics, enabling extraction of digital artifacts such as processes, network connections, and registry hives from RAM dumps.",
                url:  "https://volatilityfoundation.org/",
            }
        ]
    },
    /* ── 17. Digital Rights Management (DRM) & Anti-Piracy ── */
    {
        name: "Digital Rights Management (DRM) & Anti-Piracy",
        icon: "fa-copyright",
        color: "#57534e",
        tools: [
            {
                name: "PlayReady",
                icon: "fa-play",
                tag:  "Microsoft DRM",
                desc: "Microsoft's content protection technology for securely delivering and licensing premium video and audio content across devices and services.",
                url:  "https://www.microsoft.com/playready/",
            },
            {
                name: "Shaka Packager",
                icon: "fa-box",
                tag:  "Media Packaging & Encryption",
                desc: "Open-source media packaging tool that encrypts and packages content for adaptive streaming, integrating with Widevine, PlayReady, and FairPlay DRM systems.",
                url:  "https://github.com/shaka-project/shaka-packager",
            },
            {
                name: "Widevine",
                icon: "fa-lock",
                tag:  "Google DRM",
                desc: "Google's content protection system used across browsers and devices to encrypt and license streaming video, protecting it from unauthorized copying.",
                url:  "https://www.widevine.com/",
            }
        ]
    },
    /* ── 18. DNS & Network Infrastructure ─────────────────── */
    {
        name: "DNS & Network Infrastructure",
        icon: "fa-server",
        color: "#059669",
        tools: [
            {
                name: "BIND",
                icon: "fa-server",
                tag:  "DNS Server",
                desc: "The most widely used open-source DNS server software, providing authoritative and recursive name resolution for networks of any size.",
                url:  "https://www.isc.org/bind/",
            },
            {
                name: "dnsmasq",
                icon: "fa-network-wired",
                tag:  "Lightweight DNS/DHCP",
                desc: "Lightweight, easy-to-configure DNS forwarder and DHCP server, well suited to small networks and embedded/router deployments.",
                url:  "https://thekelleys.org.uk/dnsmasq/doc.html",
            },
            {
                name: "PowerDNS",
                icon: "fa-bolt",
                tag:  "Advanced DNS Server",
                desc: "High-performance, feature-rich authoritative and recursive DNS server with support for numerous backends and DNSSEC.",
                url:  "https://www.powerdns.com/",
            }
        ]
    },
    /* ── 19. Email Security ───────────────────────────────── */
    {
        name: "Email Security",
        icon: "fa-envelope",
        color: "#ea580c",
        tools: [
            {
                name: "ClamAV",
                icon: "fa-shield-virus",
                tag:  "Open-Source Antivirus",
                desc: "Open-source antivirus engine widely used for detecting trojans, viruses, and malware, commonly deployed to scan email attachments and mail gateways.",
                url:  "https://www.clamav.net/",
            },
            {
                name: "Rspamd",
                icon: "fa-filter",
                tag:  "Email Filtering",
                desc: "Fast, free spam-filtering system that evaluates messages using a wide range of rules, including regular expressions, statistical analysis, and custom services.",
                url:  "https://rspamd.com/",
            },
            {
                name: "SpamAssassin",
                icon: "fa-envelope-open",
                tag:  "Spam Filtering",
                desc: "Mature open-source mail filter that uses a variety of detection techniques, including header and text analysis and Bayesian filtering, to identify spam.",
                url:  "https://spamassassin.apache.org/",
            }
        ]
    },
    /* ── 20. Encryption & Cryptography ─────────────────────── */
    {
        name: "Encryption & Cryptography",
        icon: "fa-lock",
        color: "#6366f1",
        tools: [
            {
                name: "GnuPG",
                icon: "fa-signature",
                tag:  "PGP Encryption",
                desc: "Free implementation of the OpenPGP standard for encrypting and signing data and communications, widely used for secure email and file protection.",
                url:  "https://gnupg.org/",
            },
            {
                name: "OpenSSL",
                icon: "fa-lock-open",
                tag:  "Crypto Toolkit",
                desc: "Robust, full-featured toolkit implementing the TLS/SSL protocols and general-purpose cryptography, used to manage certificates, keys, and encrypted connections.",
                url:  "https://www.openssl.org/",
            },
            {
                name: "VeraCrypt",
                icon: "fa-hard-drive",
                tag:  "Disk Encryption",
                desc: "Free open-source disk encryption software that creates encrypted volumes and encrypts entire partitions or storage devices to protect data at rest.",
                url:  "https://www.veracrypt.fr/",
            }
        ]
    },
    /* ── 21. Endpoint Detection & Response (EDR) ──────────── */
    {
        name: "Endpoint Detection & Response (EDR)",
        icon: "fa-desktop",
        color: "#2563eb",
        tools: [
            {
                name: "Elastic Security",
                icon: "fa-layer-group",
                tag:  "SIEM + Endpoint Security",
                desc: "Elastic's unified security solution combining SIEM, endpoint protection, and threat hunting capabilities built on the Elastic Stack.",
                url:  "https://www.elastic.co/security",
            },
            {
                name: "OpenEDR",
                icon: "fa-desktop",
                tag:  "Free Open-Source EDR",
                desc: "Free, open-source endpoint detection and response platform providing kernel-level telemetry and detection content for threat hunting.",
                url:  "https://www.openedr.com/",
            },
            {
                name: "OSSEC",
                icon: "fa-server",
                tag:  "HIDS",
                desc: "Open-source host-based intrusion detection system performing log analysis, file integrity checking, rootkit detection, and real-time alerting.",
                url:  "https://www.ossec.net/",
            },
            {
                name: "Velociraptor",
                icon: "fa-magnifying-glass-location",
                tag:  "Endpoint Monitoring",
                desc: "Advanced open-source endpoint visibility and digital forensics tool that lets responders hunt for artifacts and monitor events across a fleet of machines.",
                url:  "https://docs.velociraptor.app/",
            },
            {
                name: "Wazuh",
                icon: "fa-shield-halved",
                tag:  "Open-Source EDR/SIEM",
                desc: "Free and open-source security platform unifying XDR and SIEM capabilities, providing threat detection, integrity monitoring, and compliance across endpoints.",
                url:  "https://wazuh.com/",
            }
        ]
    },
    /* ── 22. Exploitation Frameworks ──────────────────────── */
    {
        name: "Exploitation Frameworks",
        icon: "fa-crosshairs",
        color: "#f87171",
        tools: [
            {
                name: "Metasploit",
                icon: "fa-terminal",
                tag:  "Exploitation",
                desc: "World's most used penetration testing framework for developing, testing, and executing sophisticated exploits against remote targets.",
                url:  "https://www.metasploit.com/",
            }
        ]
    },
    /* ── 23. Fuzzing & Bug Finding ────────────────────────── */
    {
        name: "Fuzzing & Bug Finding",
        icon: "fa-bug",
        color: "#be123c",
        tools: [
            {
                name: "AFL++",
                icon: "fa-bug",
                tag:  "Coverage-Guided Fuzzer",
                desc: "Community-maintained successor to American Fuzzy Lop, offering advanced instrumentation, mutation strategies, and integrations for finding bugs through coverage-guided fuzzing.",
                url:  "https://github.com/AFLplusplus/AFLplusplus",
            },
            {
                name: "Honggfuzz",
                icon: "fa-vial",
                tag:  "Security-Oriented Fuzzer",
                desc: "Security-oriented, feedback-driven fuzzer supporting multiple instrumentation methods, built for finding crashes and vulnerabilities in software.",
                url:  "https://github.com/google/honggfuzz",
            },
            {
                name: "LibFuzzer",
                icon: "fa-code",
                tag:  "In-Process Fuzzing",
                desc: "In-process, coverage-guided, evolutionary fuzzing engine that links directly with a library under test, part of the LLVM project's compiler-rt.",
                url:  "https://llvm.org/docs/LibFuzzer.html",
            },
            {
                name: "Peach Fuzzer",
                icon: "fa-flask",
                tag:  "Smart Fuzzing Platform",
                desc: "Smart fuzzing platform that generates and mutates structured test cases from data models, used to uncover vulnerabilities across many protocols and file formats.",
                url:  "https://www.peach.tech/",
            }
        ]
    },
    /* ── 24. GRC & Compliance ─────────────────────────────── */
    {
        name: "GRC & Compliance",
        icon: "fa-clipboard-check",
        color: "#65a30d",
        tools: [
            {
                name: "CIS-CAT",
                icon: "fa-list-check",
                tag:  "CIS Compliance",
                desc: "Configuration assessment tool from the Center for Internet Security that evaluates systems against CIS Benchmarks and reports compliance scores.",
                url:  "https://www.cisecurity.org/cybersecurity-tools/cis-cat-pro",
            },
            {
                name: "Lynis",
                icon: "fa-magnifying-glass",
                tag:  "System Auditing",
                desc: "Open-source security auditing tool for Unix-based systems, performing in-depth scans for hardening and compliance opportunities.",
                url:  "https://cisofy.com/lynis/",
            },
            {
                name: "OpenSCAP",
                icon: "fa-file-shield",
                tag:  "Security Compliance",
                desc: "Open-source implementation of the SCAP standard, providing tools for vulnerability scanning, configuration assessment, and compliance reporting.",
                url:  "https://www.open-scap.org/",
            },
            {
                name: "Osquery",
                icon: "fa-terminal",
                tag:  "OS Instrumentation",
                desc: "Open-source instrumentation framework that exposes an operating system as a high-performance relational database, queryable with SQL for security monitoring.",
                url:  "https://osquery.io/",
            }
        ]
    },
    /* ── 25. Hardware Security & TPM ──────────────────────── */
    {
        name: "Hardware Security & TPM",
        icon: "fa-microchip",
        color: "#475569",
        tools: [
            {
                name: "OpenTitan",
                icon: "fa-microchip",
                tag:  "Silicon Root of Trust",
                desc: "Open-source, collaboratively developed silicon root of trust design providing transparent, trustworthy hardware security IP for chips and platforms.",
                url:  "https://opentitan.org/",
            },
            {
                name: "TPM2.0 Tools",
                icon: "fa-toolbox",
                tag:  "TPM Management Utilities",
                desc: "Official command-line utilities for interacting with TPM 2.0 devices, enabling key management, sealing, attestation, and other trusted-platform operations.",
                url:  "https://github.com/tpm2-software/tpm2-tools",
            },
            {
                name: "YubiKey Manager",
                icon: "fa-key",
                tag:  "YubiKey Management",
                desc: "Official cross-platform tool for configuring YubiKey hardware security keys, managing applications like FIDO2, PIV, and OpenPGP on the device.",
                url:  "https://www.yubico.com/support/download/",
            }
        ]
    },
    /* ── 26. Identity & Access Management (IAM) ──────────── */
    {
        name: "Identity & Access Management (IAM)",
        icon: "fa-id-badge",
        color: "#9333ea",
        tools: [
            {
                name: "Authelia",
                icon: "fa-user-shield",
                tag:  "Multi-Factor Auth",
                desc: "Open-source authentication and authorization server providing two-factor authentication and single sign-on for web applications via a reverse proxy.",
                url:  "https://www.authelia.com/",
            },
            {
                name: "Keycloak",
                icon: "fa-key",
                tag:  "Identity Management",
                desc: "Open-source identity and access management solution offering single sign-on, identity brokering, and social login for modern applications and services.",
                url:  "https://www.keycloak.org/",
            },
            {
                name: "OAuth2 Proxy",
                icon: "fa-lock",
                tag:  "OAuth2 Protection",
                desc: "Reverse proxy that provides authentication using OAuth2/OIDC providers, transparently securing internal applications without built-in auth.",
                url:  "https://oauth2-proxy.github.io/oauth2-proxy/",
            }
        ]
    },
    /* ── 27. Incident Response & Forensics ───────────────── */
    {
        name: "Incident Response & Forensics",
        icon: "fa-triangle-exclamation",
        color: "#d946ef",
        tools: [
            {
                name: "KAPE",
                icon: "fa-broom",
                tag:  "Artifact Collection",
                desc: "Kroll Artifact Parser and Extractor — a fast triage tool that collects and processes forensic artifacts from disks and memory to speed up incident investigations.",
                url:  "https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape",
            },
            {
                name: "Redline",
                icon: "fa-magnifying-glass",
                tag:  "Host Investigation",
                desc: "Free endpoint security tool from Mandiant/FireEye for collecting and analyzing host memory and file data to identify signs of malicious activity.",
                url:  "https://fireeye.market/apps/211364",
            },
            {
                name: "REMnux",
                icon: "fa-terminal",
                tag:  "Malware Toolkit",
                desc: "Linux toolkit distribution for reverse-engineering and analyzing malicious software, bundling dozens of tools for static and dynamic analysis.",
                url:  "https://remnux.org/",
            },
            {
                name: "SIFT Workstation",
                icon: "fa-toolbox",
                tag:  "Forensics Suite",
                desc: "SANS-maintained collection of free, open-source digital forensics and incident response tools bundled into a ready-to-use Linux distribution.",
                url:  "https://www.sans.org/tools/sift-workstation/",
            }
        ]
    },
    /* ── 28. Malware Analysis ─────────────────────────────── */
    {
        name: "Malware Analysis",
        icon: "fa-biohazard",
        color: "#ef4444",
        tools: [
            {
                name: "CAPA",
                icon: "fa-list-check",
                tag:  "Capability Detection",
                desc: "Open-source tool by Mandiant that automatically identifies capabilities in executable files by matching them against a library of behavioral rules.",
                url:  "https://github.com/mandiant/capa",
            },
            {
                name: "Cuckoo Sandbox",
                icon: "fa-vial",
                tag:  "Sandbox Analysis",
                desc: "Open-source automated malware analysis system that executes suspicious files in an isolated environment and reports on their behavior.",
                url:  "https://cuckoosandbox.org/",
            },
            {
                name: "dnSpy",
                icon: "fa-bug",
                tag:  ".NET Debugger",
                desc: "Debugger and assembly editor for .NET applications, allowing analysts to decompile, edit, and debug managed executables without source code.",
                url:  "https://github.com/dnSpyEx/dnSpy",
            },
            {
                name: "PEStudio",
                icon: "fa-file-magnifying-glass",
                tag:  "Static Analysis",
                desc: "Free tool for performing the initial static assessment of Windows executables, highlighting suspicious indicators before deeper malware analysis.",
                url:  "https://www.winitor.com/",
            }
        ]
    },
    /* ── 29. Mobile Security (Android/iOS) ───────────────── */
    {
        name: "Mobile Security (Android/iOS)",
        icon: "fa-mobile-screen-button",
        color: "#16a34a",
        tools: [
            {
                name: "Frida",
                icon: "fa-syringe",
                tag:  "Dynamic Instrumentation",
                desc: "Dynamic instrumentation toolkit that injects scripts into running processes on Android, iOS, and other platforms to hook and manipulate app behavior at runtime.",
                url:  "https://frida.re/",
            },
            {
                name: "MobSF (Mobile Security Framework)",
                icon: "fa-mobile-screen",
                tag:  "Mobile Security Testing",
                desc: "Automated all-in-one mobile application pentesting framework capable of performing static, dynamic, and malware analysis on Android and iOS apps.",
                url:  "https://github.com/MobSF/Mobile-Security-Framework-MobSF",
            },
            {
                name: "Objection",
                icon: "fa-terminal",
                tag:  "Runtime Exploration",
                desc: "Runtime mobile exploration toolkit built on Frida that lets testers explore and manipulate iOS and Android apps without needing a jailbroken or rooted device.",
                url:  "https://github.com/sensepost/objection",
            }
        ]
    },
    /* ── 30. Network Infrastructure Security ──────────────── */
    {
        name: "Network Infrastructure Security",
        icon: "fa-router",
        color: "#0d9488",
        tools: [
            {
                name: "pfSense",
                icon: "fa-fire",
                tag:  "Open-Source Firewall",
                desc: "Free, open-source firewall and router platform based on FreeBSD, offering enterprise-grade features such as VPN, load balancing, and traffic shaping.",
                url:  "https://www.pfsense.org/",
            },
            {
                name: "Snort",
                icon: "fa-triangle-exclamation",
                tag:  "IDS/IPS",
                desc: "Widely deployed open-source intrusion detection and prevention system that performs real-time traffic analysis and packet logging.",
                url:  "https://www.snort.org/",
            },
            {
                name: "Suricata",
                icon: "fa-shield-halved",
                tag:  "IDS/IPS",
                desc: "High-performance open-source network IDS, IPS, and network security monitoring engine supporting multi-threading and deep packet inspection.",
                url:  "https://suricata.io/",
            },
            {
                name: "Zeek (Bro)",
                icon: "fa-eye",
                tag:  "Network Traffic Analysis",
                desc: "Powerful open-source network analysis framework focused on security monitoring, inspecting all traffic for signs of suspicious activity.",
                url:  "https://zeek.org/",
            }
        ]
    },
    /* ── 31. Network Scanning & Analysis ─────────────────── */
    {
        name: "Network Scanning & Analysis",
        icon: "fa-network-wired",
        color: "#38bdf8",
        tools: [
            {
                name: "Nmap",
                icon: "fa-satellite-dish",
                tag:  "Network Scanner",
                desc: "Powerful network discovery and security auditing tool for mapping open ports, running services, and operating systems across any network.",
                url:  "https://nmap.org/",
            },
            {
                name: "Wireshark",
                icon: "fa-fish",
                tag:  "Packet Analyzer",
                desc: "Industry-standard network protocol analyzer for capturing and interactively browsing live traffic across hundreds of network types.",
                url:  "https://www.wireshark.org/",
            }
        ]
    },
    /* ── 32. OSINT & Reconnaissance ──────────────────────── */
    {
        name: "OSINT & Reconnaissance",
        icon: "fa-user-secret",
        color: "#818cf8",
        tools: [
            {
                name: "Maltego",
                icon: "fa-diagram-project",
                tag:  "Link Analysis",
                desc: "Interactive data mining and link-analysis tool that visualizes relationships between people, domains, IPs, organizations, and other entities for OSINT investigations.",
                url:  "https://www.maltego.com/",
            },
            {
                name: "theHarvester",
                icon: "fa-seedling",
                tag:  "Info Gather",
                desc: "Passive reconnaissance tool for gathering emails, subdomains, hosts, employee names, and open ports from public sources and search engines.",
                url:  "https://github.com/laramies/theHarvester",
            }
        ]
    },
    /* ── 33. Password Cracking & Brute Force ──────────────── */
    {
        name: "Password Cracking & Brute Force",
        icon: "fa-key",
        color: "#fbbf24",
        tools: [
            {
                name: "Hashcat",
                icon: "fa-bolt",
                tag:  "Hash Cracker",
                desc: "World's fastest and most advanced password recovery utility, supporting over 300 hash types via CPU and GPU acceleration.",
                url:  "https://hashcat.net/hashcat/",
            },
            {
                name: "Hydra",
                icon: "fa-lock",
                tag:  "Brute Force",
                desc: "Fast and flexible online password-cracking tool supporting numerous protocols including SSH, FTP, HTTP, SMB, and more.",
                url:  "https://github.com/vanhauser-thc/thc-hydra",
                url2: "https://www.kali.org/tools/hydra/",
            },
            {
                name: "John the Ripper",
                icon: "fa-unlock-keyhole",
                tag:  "Password Audit",
                desc: "Fast and flexible open-source password security auditing and recovery tool supporting hundreds of password hash and cipher types.",
                url:  "https://www.openwall.com/john/",
            }
        ]
    },
    /* ── 34. Penetration Testing Distributions ───────────── */
    {
        name: "Penetration Testing Distributions",
        icon: "fa-laptop-code",
        color: "#2dd4bf",
        tools: [
            {
                name: "Kali Linux",
                icon: "fa-dragon",
                tag:  "Linux Distro",
                desc: "Debian-based Linux distribution purpose-built for digital forensics and penetration testing, pre-installed with 600+ security tools.",
                url:  "https://www.kali.org/",
            },
            {
                name: "Ubuntu",
                icon: "fa-compact-disc",
                tag:  "Linux Distro",
                desc: "Popular general-purpose Linux distribution based on Debian, widely used as a base for building and running custom security and penetration testing environments.",
                url:  "https://ubuntu.com/",
            }
        ]
    },
    /* ── 35. Quantum Security & Post-Quantum Cryptography ── */
    {
        name: "Quantum Security & Post-Quantum Cryptography",
        icon: "fa-atom",
        color: "#7e22ce",
        tools: [
            {
                name: "Open Quantum Safe (liboqs)",
                icon: "fa-atom",
                tag:  "Post-Quantum Crypto Library",
                desc: "Open-source C library providing implementations of quantum-resistant cryptographic algorithms, along with integrations for OpenSSL and other protocols.",
                url:  "https://openquantumsafe.org/",
            },
            {
                name: "PQClean",
                icon: "fa-lock",
                tag:  "Clean PQC Implementations",
                desc: "Collection of clean, portable C implementations of post-quantum cryptographic schemes submitted to the NIST PQC standardization process.",
                url:  "https://github.com/PQClean/PQClean",
            }
        ]
    },
    /* ── 36. Radio Frequency (RF) & IoT Security ─────────── */
    {
        name: "Radio Frequency (RF) & IoT Security",
        icon: "fa-satellite-dish",
        color: "#15803d",
        tools: [
            {
                name: "Gqrx",
                icon: "fa-satellite",
                tag:  "SDR Receiver Software",
                desc: "Open-source software-defined radio receiver application built on GNU Radio, used to visualize and demodulate RF signals for security research.",
                url:  "https://gqrx.dk/",
            },
            {
                name: "HackRF",
                icon: "fa-satellite-dish",
                tag:  "Software-Defined Radio",
                desc: "Open-source hardware platform for software-defined radio, enabling transmission and reception from 1 MHz to 6 GHz for wireless and IoT security testing.",
                url:  "https://greatscottgadgets.com/hackrf/",
            },
            {
                name: "RTL-SDR",
                icon: "fa-wave-square",
                tag:  "Cheap Software-Defined Radio",
                desc: "Low-cost USB software-defined radio dongles that turn inexpensive DVB-T TV tuners into wideband SDR receivers for RF signal analysis.",
                url:  "https://www.rtl-sdr.com/",
            }
        ]
    },
    /* ── 37. Red Team & Post-Exploitation ────────────────── */
    {
        name: "Red Team & Post-Exploitation",
        icon: "fa-skull-crossbones",
        color: "#fb7185",
        tools: [
            {
                name: "Evil-WinRM",
                icon: "fa-terminal",
                tag:  "WinRM Shell",
                desc: "Full-featured WinRM shell designed for post-exploitation on Windows targets, enabling remote command execution, file upload/download, and in-memory script loading.",
                url:  "https://github.com/Hackplayers/evil-winrm",
            },
            {
                name: "Impacket",
                icon: "fa-box-open",
                tag:  "Protocol Toolkit",
                desc: "Collection of Python classes for working with network protocols, widely used in red team operations for SMB, Kerberos, MSRPC, and other Windows-protocol attacks.",
                url:  "https://github.com/fortra/impacket",
                url2: "https://fortra-impacket.mintlify.app/",
                url2Label: "Visit Website",
                url2Icon: "fa-arrow-up-right-from-square",
                url2Style: "same",
            }
        ]
    },
    /* ── 38. Reverse Engineering ──────────────────────────── */
    {
        name: "Reverse Engineering",
        icon: "fa-microchip",
        color: "#fb923c",
        tools: [
            {
                name: "Ghidra",
                icon: "fa-code",
                tag:  "Reverse Engineering",
                desc: "Free and open-source software reverse engineering suite developed by the NSA, supporting a wide range of processor architectures.",
                url:  "https://ghidra-sre.org/",
            }
        ]
    },
    /* ── 39. SCADA / ICS Security ─────────────────────────── */
    {
        name: "SCADA / ICS Security",
        icon: "fa-industry",
        color: "#84cc16",
        tools: [
            {
                name: "ICSSPLOIT (ISF)",
                icon: "fa-gears",
                tag:  "ICS Exploitation",
                desc: "Python-based exploitation framework modeled after Metasploit/RouterSploit, purpose-built for testing PLCs and other industrial control system protocols such as S7comm and Profinet.",
                url:  "https://github.com/dark-lbp/isf",
            },
            {
                name: "SMOD",
                icon: "fa-plug",
                tag:  "Modbus Pentest",
                desc: "Modular Modbus penetration testing framework offering scanning, brute-forcing, fuzzing, and denial-of-service modules for auditing SCADA/ICS Modbus deployments.",
                url:  "https://github.com/arnaudsoullie/smod",
            }
        ]
    },
    /* ── 40. Secure Communication & VPN ───────────────────── */
    {
        name: "Secure Communication & VPN",
        icon: "fa-user-shield",
        color: "#06b6d4",
        tools: [
            {
                name: "OpenVPN",
                icon: "fa-shield",
                tag:  "VPN",
                desc: "Widely used open-source VPN solution providing secure point-to-point and site-to-site connections through a custom security protocol built on SSL/TLS.",
                url:  "https://openvpn.net/",
            },
            {
                name: "Proxychains",
                icon: "fa-link",
                tag:  "Proxy Chaining",
                desc: "Command-line tool that forces any application's network traffic through a chain of proxy servers, commonly used for anonymized pivoting during engagements.",
                url:  "https://github.com/haad/proxychains",
            },
            {
                name: "Tor",
                icon: "fa-circle-nodes",
                tag:  "Anonymity Network",
                desc: "Free overlay network that anonymizes internet traffic by routing it through a distributed network of volunteer relays, protecting user identity and location.",
                url:  "https://www.torproject.org/",
            },
            {
                name: "WireGuard",
                icon: "fa-bolt",
                tag:  "Modern VPN",
                desc: "Fast, modern, and lightweight VPN protocol using state-of-the-art cryptography, designed to be simpler and more performant than older VPN protocols.",
                url:  "https://www.wireguard.com/",
            }
        ]
    },
    /* ── 41. Security Orchestration & Automation ─────────── */
    {
        name: "Security Orchestration & Automation",
        icon: "fa-gears",
        color: "#0f766e",
        tools: [
            {
                name: "n8n",
                icon: "fa-diagram-project",
                tag:  "Workflow Automation",
                desc: "Fair-code workflow automation tool that lets teams connect APIs and services to automate security tasks, alert enrichment, and incident workflows.",
                url:  "https://n8n.io/",
            },
            {
                name: "Shuffle",
                icon: "fa-shuffle",
                tag:  "Open-Source SOAR",
                desc: "Open-source security orchestration, automation, and response (SOAR) platform for building playbooks that automate detection and response workflows.",
                url:  "https://shuffler.io/",
            },
            {
                name: "StackStorm",
                icon: "fa-bolt",
                tag:  "Event-Driven Automation",
                desc: "Event-driven automation platform that connects existing security and IT infrastructure through rules and workflows to auto-remediate incidents.",
                url:  "https://stackstorm.com/",
            }
        ]
    },
    /* ── 42. Serverless & Function Security ──────────────── */
    {
        name: "Serverless & Function Security",
        icon: "fa-bolt-lightning",
        color: "#ca8a04",
        tools: [
            {
                name: "AWS SAM",
                icon: "fa-cloud",
                tag:  "Serverless App Security",
                desc: "AWS Serverless Application Model — an open-source framework for building, testing, and securely deploying serverless applications on AWS Lambda.",
                url:  "https://aws.amazon.com/serverless/sam/",
            }
        ]
    },
    /* ── 43. SIEM & Analytics ─────────────────────────────── */
    {
        name: "SIEM & Analytics",
        icon: "fa-chart-bar",
        color: "#34d399",
        tools: [
            {
                name: "Elastic Stack (ELK)",
                icon: "fa-layer-group",
                tag:  "Log Analytics",
                desc: "Open-source suite of Elasticsearch, Logstash, and Kibana for centralized log management, threat hunting, and security analytics.",
                url:  "https://www.elastic.co/",
            },
            {
                name: "Security Onion",
                icon: "fa-eye",
                tag:  "NSM Platform",
                desc: "Free Linux distribution for network security monitoring, intrusion detection, log management, and enterprise-level threat hunting.",
                url:  "https://securityonion.net/",
            },
            {
                name: "Splunk",
                icon: "fa-chart-line",
                tag:  "SIEM",
                desc: "Enterprise-grade data-driven SIEM platform for searching, monitoring, and analyzing machine-generated data at any scale.",
                url:  "https://www.splunk.com/",
            }
        ]
    },
    /* ── 44. SIM & Telecom Security ───────────────────────── */
    {
        name: "SIM & Telecom Security",
        icon: "fa-signal",
        color: "#b45309",
        tools: [
            {
                name: "SnoopSnitch",
                icon: "fa-shield-halved",
                tag:  "IMSI Catcher Detection",
                desc: "Android app by SRLabs that analyzes mobile radio data on rooted devices to detect fake base stations (IMSI catchers), SS7 attacks, and missing security patches.",
                url:  "https://opensource.srlabs.de/projects/snoopsnitch",
            },
            {
                name: "YateBTS",
                icon: "fa-tower-broadcast",
                tag:  "Open-Source GSM Base Station",
                desc: "Open-source software implementation of a GSM base transceiver station, used for testing and researching mobile network protocols and security.",
                url:  "https://yatebts.com/",
            }
        ]
    },
    /* ── 45. Social Engineering & Phishing ───────────────── */
    {
        name: "Social Engineering & Phishing",
        icon: "fa-user-ninja",
        color: "#f43f5e",
        tools: [
            {
                name: "GoPhish",
                icon: "fa-envelope-open-text",
                tag:  "Phishing Simulation",
                desc: "Open-source phishing framework that lets security teams create, launch, and track realistic phishing campaigns to test employee awareness.",
                url:  "https://getgophish.com/",
            },
            {
                name: "King Phisher",
                icon: "fa-fish",
                tag:  "Phishing Simulation",
                desc: "Phishing campaign toolkit for testing and promoting user awareness through simulated real-world attacks with detailed reporting and tracking.",
                url:  "https://github.com/rsmusllp/king-phisher",
            },
            {
                name: "SET (Social-Engineer Toolkit)",
                icon: "fa-masks-theater",
                tag:  "Social Engineering",
                desc: "Open-source penetration testing framework designed specifically for social engineering attacks, including spear-phishing and credential harvesting.",
                url:  "https://github.com/trustedsec/social-engineer-toolkit",
            }
        ]
    },
    /* ── 46. Steganography & Data Hiding ──────────────────── */
    {
        name: "Steganography & Data Hiding",
        icon: "fa-eye-slash",
        color: "#64748b",
        tools: [
            {
                name: "ExifTool",
                icon: "fa-camera",
                tag:  "Metadata Analysis",
                desc: "Platform-independent utility for reading, writing, and editing metadata in a wide variety of file formats, commonly used to inspect hidden EXIF data.",
                url:  "https://exiftool.org/",
            },
            {
                name: "OpenStego",
                icon: "fa-layer-group",
                tag:  "Steganography",
                desc: "Free open-source steganography tool that hides data inside cover files and supports invisible watermarking to prove ownership.",
                url:  "https://www.openstego.com/",
            },
            {
                name: "Steghide",
                icon: "fa-image",
                tag:  "Steganography",
                desc: "Command-line steganography tool that hides data in image and audio files, embedding and extracting information using compression and encryption.",
                url:  "https://github.com/StefanoDeVuono/steghide",
            }
        ]
    },
    /* ── 47. Threat Intelligence & CTI ───────────────────── */
    {
        name: "Threat Intelligence & CTI",
        icon: "fa-brain",
        color: "#eab308",
        tools: [
            {
                name: "Cortex",
                icon: "fa-robot",
                tag:  "IOC Analysis",
                desc: "Powerful observable analysis and active response engine that automates the analysis of indicators of compromise, often paired with TheHive.",
                url:  "https://strangebee.com/cortex/",
            },
            {
                name: "MISP",
                icon: "fa-share-nodes",
                tag:  "Threat Sharing",
                desc: "Open-source threat intelligence platform for collecting, storing, and sharing indicators of compromise and threat information between organizations.",
                url:  "https://www.misp-project.org/",
            },
            {
                name: "OpenCTI",
                icon: "fa-database",
                tag:  "CTI Platform",
                desc: "Open-source platform for managing and correlating cyber threat intelligence knowledge, connecting threat data to actors, campaigns, and vulnerabilities.",
                url:  "https://opencti.io/",
            },
            {
                name: "YARA",
                icon: "fa-fingerprint",
                tag:  "Malware Classification",
                desc: "Pattern-matching tool designed to help researchers identify and classify malware samples by creating descriptive rules based on textual or binary patterns.",
                url:  "https://virustotal.github.io/yara/",
            }
        ]
    },
    /* ── 48. Voice & Audio Security ───────────────────────── */
    {
        name: "Voice & Audio Security",
        icon: "fa-microphone",
        color: "#6d28d9",
        tools: [
            {
                name: "DeepSpeech",
                icon: "fa-microphone-lines",
                tag:  "Speech Recognition",
                desc: "Open-source speech-to-text engine originally by Mozilla, usable offline for transcribing and analyzing audio in voice-security and forensics workflows.",
                url:  "https://github.com/mozilla/DeepSpeech",
            },
            {
                name: "Whisper",
                icon: "fa-comment-dots",
                tag:  "Speech Recognition",
                desc: "OpenAI's open-source automatic speech recognition model, widely used for transcribing and analyzing audio recordings in security and forensic investigations.",
                url:  "https://github.com/openai/whisper",
            }
        ]
    },
    /* ── 49. Vulnerability Assessment ────────────────────── */
    {
        name: "Vulnerability Assessment",
        icon: "fa-magnifying-glass",
        color: "#e879f9",
        tools: [
            {
                name: "OpenVAS",
                icon: "fa-shield-virus",
                tag:  "Open Source",
                desc: "Comprehensive open-source vulnerability scanning and management framework maintained under the Greenbone Vulnerability Management umbrella.",
                url:  "https://www.greenbone.net/en/",
            },
            {
                name: "Tenable Nessus",
                icon: "fa-stethoscope",
                tag:  "Vuln Scanner",
                desc: "Industry-leading vulnerability assessment scanner trusted worldwide to identify, prioritize, and help remediate security weaknesses.",
                url:  "https://www.tenable.com/products/nessus",
            }
        ]
    },
    /* ── 50. Web Application Testing ─────────────────────── */
    {
        name: "Web Application Testing",
        icon: "fa-globe",
        color: "#a78bfa",
        tools: [
            {
                name: "Burp Suite",
                icon: "fa-bug",
                tag:  "Web Security",
                desc: "Leading integrated platform and web vulnerability scanner with an intercepting proxy for comprehensive web application security testing.",
                url:  "https://portswigger.net/burp",
            },
            {
                name: "OWASP ZAP",
                icon: "fa-shield-halved",
                tag:  "Web Scanner",
                desc: "Open-source web application security scanner for finding vulnerabilities during development, testing, and CI/CD pipeline stages.",
                url:  "https://www.zaproxy.org/",
            },
            {
                name: "SQLmap",
                icon: "fa-database",
                tag:  "SQL Injection",
                desc: "Automated open-source tool for detecting and exploiting SQL injection flaws and taking over database servers in web applications.",
                url:  "https://sqlmap.org/",
            }
        ]
    },
    /* ── 51. Web Discovery & Fuzzing ─────────────────────── */
    {
        name: "Web Discovery & Fuzzing",
        icon: "fa-spider",
        color: "#c084fc",
        tools: [
            {
                name: "ffuf",
                icon: "fa-arrows-rotate",
                tag:  "Web Fuzzer",
                desc: "High-speed web fuzzer written in Go for discovering hidden files, directories, parameters, and subdomains via customizable wordlist-based fuzzing.",
                url:  "https://github.com/ffuf/ffuf",
            },
            {
                name: "Gobuster",
                icon: "fa-shuffle",
                tag:  "Dir Brute",
                desc: "Fast directory, DNS, and VHost brute-forcing tool written in Go, designed to enumerate hidden paths and subdomains on web servers.",
                url:  "https://github.com/OJ/gobuster",
            },
            {
                name: "Nikto",
                icon: "fa-globe",
                tag:  "Web Scanner",
                desc: "Open-source web server scanner that performs comprehensive tests for dangerous files, outdated software versions, and common misconfigurations across thousands of checks.",
                url:  "https://cirt.net/Nikto2",
            }
        ]
    },
    /* ── 52. Wireless & Network Recon ─────────────────────── */
    {
        name: "Wireless & Network Recon",
        icon: "fa-wifi",
        color: "#22d3ee",
        tools: [
            {
                name: "Aircrack-ng",
                icon: "fa-wifi",
                tag:  "WiFi Audit",
                desc: "Complete suite of tools for auditing wireless network security, including packet capture, WEP/WPA/WPA2 cracking, and replay attacks.",
                url:  "https://www.aircrack-ng.org/",
            },
            {
                name: "Netcat",
                icon: "fa-network-wired",
                tag:  "Net Utility",
                desc: "Versatile networking utility for reading and writing data across TCP/UDP connections, often called the 'Swiss Army knife' of networking.",
                url:  "https://nmap.org/ncat/",
            },
            {
                name: "Shodan",
                icon: "fa-satellite-dish",
                tag:  "IoT Search",
                desc: "Search engine for internet-connected devices that lets security professionals discover exposed services, open ports, and vulnerable systems worldwide.",
                url:  "https://www.shodan.io/",
            }
        ]
    }
]
