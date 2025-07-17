# MusoPlan
Project for diploma of IT via Goanna

Version Control System (VCS) Research and Installation Report
________________________________________
Introduction
Version Control Systems (VCS) are critical tools in software development that allow developers to track changes, collaborate in teams, and maintain version history of codebases. As part of the setup for our development environment, research was conducted into different VCS solutions to select and implement the most appropriate one for our organisational needs. Visual Studio Code (VS Code) was chosen as the final integration environment.
________________________________________
Different VCS Investigated
Three major VCS tools were considered:
1.	Git (Distributed VCS)
2.	Subversion (SVN) (Centralized VCS)
3.	Mercurial (Distributed VCS)
•	Git is widely adopted in both open-source and enterprise environments. It supports distributed workflows and is highly compatible with CI/CD and cloud repositories (e.g., GitHub, GitLab).
•	SVN is a centralized version control system often used in legacy systems. It offers simple models for small teams but lacks the flexibility of distributed systems.
•	Mercurial offers similar capabilities to Git but has a more simplified command set. However, community support and adoption are less than Git.
________________________________________
Benefits of Different VCS
•	Git:
o	Decentralized workflows
o	Branching and merging are efficient
o	Excellent community support
o	Integration with GitHub, GitLab, Bitbucket
•	SVN:
o	Simpler for linear workflows
o	Centralized control, which may suit regulated environments
•	Mercurial:
o	Cleaner CLI syntax
o	Fast and lightweight, with simpler learning curve
________________________________________
Final Choice: Git with VS Code
Rationale: Git was chosen due to its flexibility, industry-standard usage, robust feature set, and seamless integration with VS Code. The combination fits well with the collaborative and modular structure of our project.
Organisational Fit:
•	Team-based development with remote contributors
•	Requirement to integrate with GitHub repositories
•	Frequent feature branching, versioning, and rollback needs
________________________________________
Installation Process
Pre-installation:
•	Ensured administrator access on the system
•	Checked for existing Git installation with git --version
Installation Steps:
1.	Downloaded Git from the official site (https://git-scm.com/downloads)
2.	Installed Git with default settings (included Git Bash and GUI tools)
3.	Installed VS Code from https://code.visualstudio.com/
4.	Verified Git integration by opening a folder in VS Code and accessing Source Control
Issues Encountered:
•	Firewall initially blocked Git installation
•	Resolved by allowing Git executable through Windows Defender
________________________________________
Potential Disruptions
•	Network Policies: Proxy/firewall configurations could block external repositories
•	User Training: Team members unfamiliar with Git needed introductory training on basic commands
•	Repository Access: Required SSH key setup for private repository authentication
________________________________________

Configuration Process
•	Set Global Username and Email:
•	git config --global user.name "Zafar B"
•	git config --global user.email "zafar@example.com"
•	Set VS Code as default editor:
•	git config --global core.editor "code --wait"
•	Confirmed all commits were attributed to the correct developer.
________________________________________
Conclusion
After evaluating several VCS options, Git integrated with VS Code was adopted due to its industry support, powerful capabilities, and flexibility for team-based development. Installation and configuration were largely straightforward with minor firewall adjustments. The environment is now ready for active development with efficient version control practices in place.

