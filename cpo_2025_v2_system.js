// CPO 2025 full 300-question bank and engine
(function(){
  const SUBJECTS = ["Foundations and Risk", "Communications and Reporting", "Access Control and Physical Security", "Investigations and Incident Management", "Legal and Rule Enforcement", "Patrol, Awareness, Robotics, and Automation", "Emergency Planning and Response", "Fire, WHMIS, and First Aid", "Leadership, Ethics, Customer Service, and Networking", "Traffic, Crowd, and Special Events"];
  const REVIEWER = {"Foundations and Risk": ["Definition of protection officer", "Operational level", "Tactical level", "Strategic level", "Management representative role", "Intelligence agent role", "Compliance agent role", "Legal consultant role", "Professional status", "Competency balance"], "Communications and Reporting": ["Effective communication", "Consider the audience", "Feedback in communication", "Channels of communication", "Proper use of communication devices", "Myths in communication", "Report importance", "Field notes purpose", "What should be reported", "Good report quality"], "Access Control and Physical Security": ["Physical security planning starts with", "After assets are identified", "Occurrence probability factors", "Vulnerabilities are determined", "Countermeasures are selected", "Security lighting", "Security glazing", "Intrusion detection", "System monitoring", "Card access"], "Investigations and Incident Management": ["Investigation purpose", "Investigation and human communication", "Ethics of investigation", "Preliminary investigation", "Follow-up investigation", "Liaison in investigation", "Notes and reports in investigations", "Surveillance in investigation", "Testifying in proceedings", "Data security in investigations"], "Legal and Rule Enforcement": ["Rule enforcement", "Organizational rules", "Duty of care", "Development of laws", "Criminal and civil law", "International standards and human rights", "Voluntary principles on security and human rights", "Montreux Document", "UN Guiding Principles on Business and Human Rights", "International Code of Conduct for Private Security"], "Patrol, Awareness, Robotics, and Automation": ["Purpose of patrol", "Types of patrol", "Preparation for patrol", "Equipment check", "Techniques of patrol", "Unethical patrol practices", "Body-worn cameras goal", "Robotics as force multipliers", "Robotics in security", "Drones in security"], "Emergency Planning and Response": ["Emergency planning", "Types of potential emergencies", "Scope of the problem", "Risk assessment in planning", "Developing the emergency response plan", "Reviewing and integrating plans", "Active assailant preparedness", "Workplace violence prevention", "Threat detection and assessment", "Security measures for active assailant"], "Fire, WHMIS, and First Aid": ["Class A fire", "Class B fire", "Class C fire", "Class D fire", "Class K fire", "SDS purpose", "WHMIS labels", "Hazard awareness", "PPE in hazardous materials", "Cardiac chain of survival"], "Leadership, Ethics, Customer Service, and Networking": ["Protection officer as leader", "Do you really want to be a leader", "Team member skills foundation", "Expectations of leaders", "Ten steps to effective leadership", "Leader as agent of change", "Pitfalls of leadership", "Ethics and professionalism", "Standards of conduct", "Unethical behavior"], "Traffic, Crowd, and Special Events": ["Formation of crowds", "Psychological factors in crowds", "Types of crowds", "Crowd actions and countermeasures", "When verbalization doesn't work", "Security and demonstrations", "Formation of a mob", "Responsibility and behavior of protective groups", "Planning considerations for special events", "Personal behavior at events"]};
  const BANK = {"Foundations and Risk": [{"id": 1, "subject": "Foundations and Risk", "concept": "Foundations and Risk::1", "year2025": true, "q": "Which best describes definition of protection officer?", "options": ["A frontline professional who protects people, information, property, reputation, and environment", "A public police officer with automatic arrest powers", "A worker who focuses only on theft prevention", "A role limited to access control posts"], "answer": 0, "explanation": "A frontline professional who protects people, information, property, reputation, and environment"}, {"id": 2, "subject": "Foundations and Risk", "concept": "Foundations and Risk::2", "year2025": true, "q": "Which best describes operational level?", "options": ["Following simple orders and performing basic security measures", "Managing enterprise strategy across all regions", "Writing international standards for the industry", "Replacing supervisors during labor actions"], "answer": 0, "explanation": "Following simple orders and performing basic security measures"}, {"id": 3, "subject": "Foundations and Risk", "concept": "Foundations and Risk::3", "year2025": true, "q": "Which best describes tactical level?", "options": ["Managing processes and dealing with more complex orders in mid-to-high-threat settings", "Providing only entry-level reception duties", "Eliminating the need for post orders", "Handling only bookkeeping and payroll"], "answer": 0, "explanation": "Managing processes and dealing with more complex orders in mid-to-high-threat settings"}, {"id": 4, "subject": "Foundations and Risk", "concept": "Foundations and Risk::4", "year2025": true, "q": "Which best describes strategic level?", "options": ["Protecting corporate objectives from uncertainty across an entity", "Checking one door for one shift", "Replacing every physical security measure with software", "Focusing only on patrol tours"], "answer": 0, "explanation": "Protecting corporate objectives from uncertainty across an entity"}, {"id": 5, "subject": "Foundations and Risk", "concept": "Foundations and Risk::5", "year2025": true, "q": "Which best describes management representative role?", "options": ["Representing management philosophy to employees, visitors, and others", "Acting as a sworn detective in criminal court", "Ignoring customer relations in favor of force", "Writing legislation for the client"], "answer": 0, "explanation": "Representing management philosophy to employees, visitors, and others"}, {"id": 6, "subject": "Foundations and Risk", "concept": "Foundations and Risk::6", "year2025": true, "q": "Which best describes intelligence agent role?", "options": ["Collecting loss-related information and recognizing that minor issues may signal larger problems", "Making legal arrests without review", "Replacing all human communication with cameras", "Treating every rumor as proven fact"], "answer": 0, "explanation": "Collecting loss-related information and recognizing that minor issues may signal larger problems"}, {"id": 7, "subject": "Foundations and Risk", "concept": "Foundations and Risk::7", "year2025": true, "q": "Which best describes compliance agent role?", "options": ["Gaining rule compliance through knowledge, tact, and communication", "Using force as the normal first option", "Ignoring site rules if the person is cooperative", "Enforcing only criminal law and not site rules"], "answer": 0, "explanation": "Gaining rule compliance through knowledge, tact, and communication"}, {"id": 8, "subject": "Foundations and Risk", "concept": "Foundations and Risk::8", "year2025": true, "q": "Which best describes legal consultant role?", "options": ["Applying relevant legal standards involving privacy, search, property rights, and compliance", "Guaranteeing that no lawsuit can ever occur", "Creating law for the jurisdiction", "Replacing all site policy with personal judgment"], "answer": 0, "explanation": "Applying relevant legal standards involving privacy, search, property rights, and compliance"}, {"id": 9, "subject": "Foundations and Risk", "concept": "Foundations and Risk::9", "year2025": true, "q": "Which best describes professional status?", "options": ["Commitment, ethics, shared knowledge, discretion, and loss consciousness", "Being armed at work", "Wearing any uniform correctly", "Holding seniority alone"], "answer": 0, "explanation": "Commitment, ethics, shared knowledge, discretion, and loss consciousness"}, {"id": 10, "subject": "Foundations and Risk", "concept": "Foundations and Risk::10", "year2025": true, "q": "Which best describes competency balance?", "options": ["Knowledge, skill, and attitude working together", "Training alone without judgment", "Technology alone without people", "Attitude only without procedures"], "answer": 0, "explanation": "Knowledge, skill, and attitude working together"}, {"id": 11, "subject": "Foundations and Risk", "concept": "Foundations and Risk::11", "year2025": true, "q": "Which best describes what of protection?", "options": ["Preventing, mitigating, verifying, and responding to loss against all assets", "Reacting only after crime occurs", "Protecting property only", "Replacing business decisions with security opinions"], "answer": 0, "explanation": "Preventing, mitigating, verifying, and responding to loss against all assets"}, {"id": 12, "subject": "Foundations and Risk", "concept": "Foundations and Risk::12", "year2025": true, "q": "Which best describes loss category: disaster?", "options": ["A threat category involving destructive events beyond routine crime", "A synonym for negligence only", "A type of patrol route", "A document retention rule"], "answer": 0, "explanation": "A threat category involving destructive events beyond routine crime"}, {"id": 13, "subject": "Foundations and Risk", "concept": "Foundations and Risk::13", "year2025": true, "q": "Which best describes loss category: waste?", "options": ["A loss category involving preventable inefficiency or needless loss", "A fire class", "An alarm sensor fault only", "A legal defense"], "answer": 0, "explanation": "A loss category involving preventable inefficiency or needless loss"}, {"id": 14, "subject": "Foundations and Risk", "concept": "Foundations and Risk::14", "year2025": true, "q": "Which best describes loss category: near miss?", "options": ["An event that almost caused loss and should still drive learning", "A confirmed felony", "A completed court judgment", "A required evacuation order"], "answer": 0, "explanation": "An event that almost caused loss and should still drive learning"}, {"id": 15, "subject": "Foundations and Risk", "concept": "Foundations and Risk::15", "year2025": true, "q": "Which option is correct about the 2025 priority order of critical assets?", "options": ["A and B are correct: A. People comes first. B. Information comes before property.", "A and C are correct: A. People comes first. C. Environment comes before reputation.", "B and D are correct: B. Property comes before information. D. Reputation comes before people.", "None of the above"], "answer": 0, "explanation": "The 2025 text prioritizes people first, then information, then property, then reputation, then environment."}, {"id": 16, "subject": "Foundations and Risk", "concept": "Foundations and Risk::16", "year2025": true, "q": "Which best describes asset priority order?", "options": ["People, information, property, reputation, environment", "Property, people, information, reputation, environment", "Information, people, property, reputation, environment", "People, property, environment, information, reputation"], "answer": 0, "explanation": "People, information, property, reputation, environment"}, {"id": 17, "subject": "Foundations and Risk", "concept": "Foundations and Risk::17", "year2025": true, "q": "Which best describes thirty-five scenarios idea?", "options": ["Five asset types crossed with seven threat categories", "Thirty-five criminal charges every officer must memorize", "Five emergency exits times seven shifts", "A fixed ratio for staffing"], "answer": 0, "explanation": "Five asset types crossed with seven threat categories"}, {"id": 18, "subject": "Foundations and Risk", "concept": "Foundations and Risk::18", "year2025": true, "q": "Which best describes plan phase?", "options": ["Preventative functions performed before active measures", "Response functions performed after damage", "A synonym for detention", "Only the act of writing a report"], "answer": 0, "explanation": "Preventative functions performed before active measures"}, {"id": 19, "subject": "Foundations and Risk", "concept": "Foundations and Risk::19", "year2025": true, "q": "Which best describes preventative function: investigate?", "options": ["Understanding the context and objectives of the organization", "Stopping an attack with force", "Restarting operations after disruption", "Auditing completed work only"], "answer": 0, "explanation": "Understanding the context and objectives of the organization"}, {"id": 20, "subject": "Foundations and Risk", "concept": "Foundations and Risk::20", "year2025": true, "q": "Which best describes preventative function: integrate?", "options": ["Putting countermeasures together to treat risk", "Evacuating without assessment", "Changing evidence after an event", "Issuing criminal charges"], "answer": 0, "explanation": "Putting countermeasures together to treat risk"}, {"id": 21, "subject": "Foundations and Risk", "concept": "Foundations and Risk::21", "year2025": true, "q": "Which option correctly identifies mitigation functions in the 2025 framework?", "options": ["A and B are correct: A. Deter. B. Detect.", "A and C are correct: A. Deter. C. Report.", "B and D are correct: B. Detect. D. Recover.", "None of the above"], "answer": 0, "explanation": "The mitigation phase uses the four D's: deter, detect, delay, and deny."}, {"id": 22, "subject": "Foundations and Risk", "concept": "Foundations and Risk::22", "year2025": true, "q": "Which best describes mitigation function: deter?", "options": ["Confronting potential aggressors based on suspicion indicators", "Collecting evidence after arrest", "Restarting normal business after closure", "Ignoring early warning signs"], "answer": 0, "explanation": "Confronting potential aggressors based on suspicion indicators"}, {"id": 23, "subject": "Foundations and Risk", "concept": "Foundations and Risk::23", "year2025": true, "q": "Which option correctly identifies response functions in the 2025 framework?", "options": ["A and B are correct: A. React. B. Report.", "A and C are correct: A. React. C. Identify.", "B and D are correct: B. Report. D. Delay.", "None of the above"], "answer": 0, "explanation": "The response functions are react, report, recover, and reinitiate."}, {"id": 24, "subject": "Foundations and Risk", "concept": "Foundations and Risk::24", "year2025": true, "q": "Which best describes study phase?", "options": ["Supervisory verification of whether the plan is working", "Immediate recovery after loss", "An automatic court process", "A synonym for delay"], "answer": 0, "explanation": "Supervisory verification of whether the plan is working"}, {"id": 25, "subject": "Foundations and Risk", "concept": "Foundations and Risk::25", "year2025": true, "q": "Which best describes supervisory function: audit?", "options": ["Verifying system integrity", "Starting a fire watch", "Replacing post orders", "Issuing media statements"], "answer": 0, "explanation": "Verifying system integrity"}, {"id": 26, "subject": "Foundations and Risk", "concept": "Foundations and Risk::26", "year2025": true, "q": "Which best describes act phase?", "options": ["Response functions and feedback after undesirable events", "Only pre-employment screening", "A type of camera analytics", "A maintenance-only program"], "answer": 0, "explanation": "Response functions and feedback after undesirable events"}, {"id": 27, "subject": "Foundations and Risk", "concept": "Foundations and Risk::27", "year2025": true, "q": "Which best describes response function: reinitiate?", "options": ["Restarting operations and hardening against recurrence", "Ignoring lessons learned", "Writing visitor badges", "Delaying all communication"], "answer": 0, "explanation": "Restarting operations and hardening against recurrence"}, {"id": 28, "subject": "Foundations and Risk", "concept": "Foundations and Risk::28", "year2025": true, "q": "Which best describes pdsa purpose?", "options": ["Continual improvement of the protection process", "A force continuum", "A chemical labeling system", "A method for choosing uniforms"], "answer": 0, "explanation": "Continual improvement of the protection process"}, {"id": 29, "subject": "Foundations and Risk", "concept": "Foundations and Risk::29", "year2025": true, "q": "Which best describes esrm?", "options": ["Enterprise security risk management aligned with organizational objectives", "Emergency security response model", "Electronic system routing matrix", "External surveillance response manual"], "answer": 0, "explanation": "Enterprise security risk management aligned with organizational objectives"}, {"id": 30, "subject": "Foundations and Risk", "concept": "Foundations and Risk::30", "year2025": true, "q": "Which best describes hsseq trend?", "options": ["An expansion toward health, safety, security, environment, and quality coordination", "A replacement for risk management", "A drone-only operating rule", "A law enforcement rank structure"], "answer": 0, "explanation": "An expansion toward health, safety, security, environment, and quality coordination"}], "Communications and Reporting": [{"id": 31, "subject": "Communications and Reporting", "concept": "Communications and Reporting::1", "year2025": true, "q": "Which best describes effective communication?", "options": ["Communication that is clear, understood, and suited to the audience", "Communication that is longest and most technical", "Communication that avoids feedback", "Communication that relies only on radio codes"], "answer": 0, "explanation": "Communication that is clear, understood, and suited to the audience"}, {"id": 32, "subject": "Communications and Reporting", "concept": "Communications and Reporting::2", "year2025": true, "q": "Which best describes consider the audience?", "options": ["Tailoring the message to who is receiving it", "Using the same script for every person", "Avoiding plain language in emergencies", "Replacing communication with signage"], "answer": 0, "explanation": "Tailoring the message to who is receiving it"}, {"id": 33, "subject": "Communications and Reporting", "concept": "Communications and Reporting::3", "year2025": true, "q": "Which best describes feedback in communication?", "options": ["Verifying that the message was actually understood", "Showing anger to stress urgency", "Repeating the same message louder", "Avoiding questions"], "answer": 0, "explanation": "Verifying that the message was actually understood"}, {"id": 34, "subject": "Communications and Reporting", "concept": "Communications and Reporting::4", "year2025": true, "q": "Which best describes channels of communication?", "options": ["Different ways information travels between parties", "Only handheld radio traffic", "Only written reports after shift", "Only alarms and sirens"], "answer": 0, "explanation": "Different ways information travels between parties"}, {"id": 35, "subject": "Communications and Reporting", "concept": "Communications and Reporting::5", "year2025": true, "q": "Which best describes proper use of communication devices?", "options": ["Using tools correctly, professionally, and for the task", "Using personal devices instead of official systems", "Leaving radios off to reduce noise", "Broadcasting sensitive information publicly"], "answer": 0, "explanation": "Using tools correctly, professionally, and for the task"}, {"id": 36, "subject": "Communications and Reporting", "concept": "Communications and Reporting::6", "year2025": true, "q": "Which best describes myths in communication?", "options": ["False beliefs that weaken accuracy or effectiveness", "Mandatory legal defenses", "Fire suppression methods", "Types of access credentials"], "answer": 0, "explanation": "False beliefs that weaken accuracy or effectiveness"}, {"id": 37, "subject": "Communications and Reporting", "concept": "Communications and Reporting::7", "year2025": true, "q": "Which best describes report importance?", "options": ["Reports preserve facts, decisions, and accountability", "Reports replace training", "Reports are useful only after arrests", "Reports remove the need for witness interviews"], "answer": 0, "explanation": "Reports preserve facts, decisions, and accountability"}, {"id": 38, "subject": "Communications and Reporting", "concept": "Communications and Reporting::8", "year2025": true, "q": "Which best describes field notes purpose?", "options": ["Capturing details promptly to support later reporting", "Replacing formal reports permanently", "Allowing memory to stay vague", "Serving only as personal reminders with no value"], "answer": 0, "explanation": "Capturing details promptly to support later reporting"}, {"id": 39, "subject": "Communications and Reporting", "concept": "Communications and Reporting::9", "year2025": true, "q": "Which best describes what should be reported?", "options": ["Events, observations, actions, and facts relevant to safety, security, and operations", "Only matters that become criminal charges", "Only injuries requiring hospital transport", "Only events a supervisor already saw"], "answer": 0, "explanation": "Events, observations, actions, and facts relevant to safety, security, and operations"}, {"id": 40, "subject": "Communications and Reporting", "concept": "Communications and Reporting::10", "year2025": true, "q": "Which best describes good report quality?", "options": ["Accurate, objective, relevant, and understandable", "Emotional, dramatic, and lengthy", "Opinion-heavy and speculative", "Written from memory much later"], "answer": 0, "explanation": "Accurate, objective, relevant, and understandable"}, {"id": 41, "subject": "Communications and Reporting", "concept": "Communications and Reporting::11", "year2025": true, "q": "Which best describes objectivity?", "options": ["Separating facts from assumptions and feelings", "Making the report sound confident even if unsure", "Adding motive without evidence", "Leaving out inconvenient details"], "answer": 0, "explanation": "Separating facts from assumptions and feelings"}, {"id": 42, "subject": "Communications and Reporting", "concept": "Communications and Reporting::12", "year2025": true, "q": "Which best describes chronology?", "options": ["Putting events in correct sequence", "Grouping events by emotion", "Writing the conclusion first and facts later", "Ignoring times if the event was busy"], "answer": 0, "explanation": "Putting events in correct sequence"}, {"id": 43, "subject": "Communications and Reporting", "concept": "Communications and Reporting::13", "year2025": true, "q": "Which best describes plain language?", "options": ["Using clear words that reduce confusion", "Replacing all tactical terms with slang", "Making reports more complicated", "Avoiding written clarity"], "answer": 0, "explanation": "Using clear words that reduce confusion"}, {"id": 44, "subject": "Communications and Reporting", "concept": "Communications and Reporting::14", "year2025": true, "q": "Which best describes documentation value?", "options": ["If it is not documented, it is harder to prove or review", "Documentation is optional if the officer is credible", "Only cameras count as records", "Documentation matters only in court"], "answer": 0, "explanation": "If it is not documented, it is harder to prove or review"}, {"id": 45, "subject": "Communications and Reporting", "concept": "Communications and Reporting::15", "year2025": true, "q": "Which best describes observation in reporting?", "options": ["Recording what was seen, heard, smelled, or otherwise perceived", "Recording what probably happened", "Recording what others may have felt", "Recording only what was captured on video"], "answer": 0, "explanation": "Recording what was seen, heard, smelled, or otherwise perceived"}, {"id": 46, "subject": "Communications and Reporting", "concept": "Communications and Reporting::16", "year2025": true, "q": "Which best describes distinguishing fact from inference?", "options": ["Knowing what was directly observed versus concluded", "Treating all conclusions as facts", "Using hearsay as observation", "Replacing all facts with impressions"], "answer": 0, "explanation": "Knowing what was directly observed versus concluded"}, {"id": 47, "subject": "Communications and Reporting", "concept": "Communications and Reporting::17", "year2025": true, "q": "Which best describes interviewing purpose?", "options": ["Obtaining information through purposeful communication", "Forcing a confession through pressure", "Replacing scene preservation", "Serving as a substitute for notes"], "answer": 0, "explanation": "Obtaining information through purposeful communication"}, {"id": 48, "subject": "Communications and Reporting", "concept": "Communications and Reporting::18", "year2025": true, "q": "Which best describes statements?", "options": ["Recorded accounts from involved or witnessing persons", "Automatic proof of guilt", "A replacement for physical evidence", "Only useful in civil court"], "answer": 0, "explanation": "Recorded accounts from involved or witnessing persons"}, {"id": 49, "subject": "Communications and Reporting", "concept": "Communications and Reporting::19", "year2025": true, "q": "Which best describes deception awareness?", "options": ["Recognizing signs that require careful follow-up, not assumptions", "Treating nervousness as proof", "Ignoring inconsistencies completely", "Replacing evidence collection"], "answer": 0, "explanation": "Recognizing signs that require careful follow-up, not assumptions"}, {"id": 50, "subject": "Communications and Reporting", "concept": "Communications and Reporting::20", "year2025": true, "q": "Which best describes concluding an interview?", "options": ["Ending clearly and preserving useful information", "Arguing until the person changes the story", "Promising outcomes to get cooperation", "Discarding notes once the talk ends"], "answer": 0, "explanation": "Ending clearly and preserving useful information"}, {"id": 51, "subject": "Communications and Reporting", "concept": "Communications and Reporting::21", "year2025": true, "q": "Which best describes court credibility?", "options": ["Being consistent, factual, and supported by notes", "Having the strongest opinion", "Using legal jargon constantly", "Remembering without documentation"], "answer": 0, "explanation": "Being consistent, factual, and supported by notes"}, {"id": 52, "subject": "Communications and Reporting", "concept": "Communications and Reporting::22", "year2025": true, "q": "Which best describes radio discipline?", "options": ["Transmitting clearly, briefly, and only needed information", "Keeping the channel busy to show activity", "Using humor during emergencies", "Broadcasting private data to everyone"], "answer": 0, "explanation": "Transmitting clearly, briefly, and only needed information"}, {"id": 53, "subject": "Communications and Reporting", "concept": "Communications and Reporting::23", "year2025": true, "q": "Which best describes mass communication?", "options": ["Sending urgent information to many people quickly when needed", "Replacing all individual communication", "Only a social media activity", "Used only after incidents end"], "answer": 0, "explanation": "Sending urgent information to many people quickly when needed"}, {"id": 54, "subject": "Communications and Reporting", "concept": "Communications and Reporting::24", "year2025": true, "q": "Which best describes incident scene communication?", "options": ["Passing accurate updates to the right people while preserving control", "Sharing rumors to speed action", "Allowing all bystanders to direct the scene", "Stopping all communication until police arrive"], "answer": 0, "explanation": "Passing accurate updates to the right people while preserving control"}, {"id": 55, "subject": "Communications and Reporting", "concept": "Communications and Reporting::25", "year2025": true, "q": "Which best describes liaison communication?", "options": ["Coordinating with other departments or agencies professionally", "Giving away confidential data by default", "Refusing to cooperate with any partner", "Avoiding all outside contact"], "answer": 0, "explanation": "Coordinating with other departments or agencies professionally"}, {"id": 56, "subject": "Communications and Reporting", "concept": "Communications and Reporting::26", "year2025": true, "q": "Which best describes complaint handling?", "options": ["Listening, clarifying, and responding professionally", "Matching the complainant's anger", "Ignoring minor complaints always", "Treating all complaints as discipline"], "answer": 0, "explanation": "Listening, clarifying, and responding professionally"}, {"id": 57, "subject": "Communications and Reporting", "concept": "Communications and Reporting::27", "year2025": true, "q": "Which best describes media awareness?", "options": ["Understanding that media contact can affect operations and reputation", "Giving unrestricted comment without authority", "Treating every reporter as an adversary", "Ignoring public messaging during crises"], "answer": 0, "explanation": "Understanding that media contact can affect operations and reputation"}, {"id": 58, "subject": "Communications and Reporting", "concept": "Communications and Reporting::28", "year2025": true, "q": "Which best describes b.l.u.f.?", "options": ["Bottom line up front communication for clarity in high-pressure situations", "A bomb disposal acronym", "A visitor badge type", "A legal test for detention"], "answer": 0, "explanation": "Bottom line up front communication for clarity in high-pressure situations"}, {"id": 59, "subject": "Communications and Reporting", "concept": "Communications and Reporting::29", "year2025": true, "q": "Which best describes note correction?", "options": ["Correcting errors cleanly without disguising the original entry", "Erasing mistakes fully", "Tearing out pages", "Rewriting notes after the shift"], "answer": 0, "explanation": "Correcting errors cleanly without disguising the original entry"}, {"id": 60, "subject": "Communications and Reporting", "concept": "Communications and Reporting::30", "year2025": true, "q": "Which best describes report review?", "options": ["Checking for accuracy, completeness, and clarity before final submission", "Adding facts later without noting it", "Removing all uncertain observations", "Changing time order to improve the story"], "answer": 0, "explanation": "Checking for accuracy, completeness, and clarity before final submission"}], "Access Control and Physical Security": [{"id": 61, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::1", "year2025": true, "q": "Which best describes physical security planning starts with?", "options": ["Identifying assets", "Installing cameras first", "Hiring guards first", "Calculating insurance first"], "answer": 0, "explanation": "Identifying assets"}, {"id": 62, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::2", "year2025": true, "q": "Which best describes after assets are identified?", "options": ["Loss events are exposed and probability and impact are assessed", "The plan is complete", "No vulnerabilities remain", "Locks are always sufficient"], "answer": 0, "explanation": "Loss events are exposed and probability and impact are assessed"}, {"id": 63, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::3", "year2025": true, "q": "Which best describes occurrence probability factors?", "options": ["Help estimate how likely loss events are", "Replace impact assessment", "Are identical to asset value", "Matter only in criminal cases"], "answer": 0, "explanation": "Help estimate how likely loss events are"}, {"id": 64, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::4", "year2025": true, "q": "Which best describes vulnerabilities are determined?", "options": ["To understand how threats could exploit weaknesses", "To eliminate the need for patrols", "Only after a lawsuit", "Only for information assets"], "answer": 0, "explanation": "To understand how threats could exploit weaknesses"}, {"id": 65, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::5", "year2025": true, "q": "Which best describes countermeasures are selected?", "options": ["After assets, events, probability, impact, and vulnerabilities are considered", "Before risks are identified", "Randomly to show presence", "Only by outside police"], "answer": 0, "explanation": "After assets, events, probability, impact, and vulnerabilities are considered"}, {"id": 66, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::6", "year2025": true, "q": "Which best describes security lighting?", "options": ["Supports visibility, deterrence, and safety", "Replaces access control", "Eliminates all shadows and risk", "Is only decorative"], "answer": 0, "explanation": "Supports visibility, deterrence, and safety"}, {"id": 67, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::7", "year2025": true, "q": "Which best describes security glazing?", "options": ["Provides enhanced resistance or safety performance in openings", "Replaces all walls", "Functions as a fire extinguisher", "Is only for aesthetics"], "answer": 0, "explanation": "Provides enhanced resistance or safety performance in openings"}, {"id": 68, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::8", "year2025": true, "q": "Which best describes intrusion detection?", "options": ["Identifies unauthorized entry or movement", "Guarantees detention authority", "Replaces all barriers", "Matters only after hours"], "answer": 0, "explanation": "Identifies unauthorized entry or movement"}, {"id": 69, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::9", "year2025": true, "q": "Which best describes system monitoring?", "options": ["Watching and responding to system status and alerts", "Only recording alarms with no response", "Ignoring nuisance conditions", "Replacing human judgment"], "answer": 0, "explanation": "Watching and responding to system status and alerts"}, {"id": 70, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::10", "year2025": true, "q": "Which best describes card access?", "options": ["Uses credentials to regulate entry and record activity", "Removes all need for policies", "Allows access without authorization", "Is identical to public police authority"], "answer": 0, "explanation": "Uses credentials to regulate entry and record activity"}, {"id": 71, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::11", "year2025": true, "q": "Which best describes locking hardware?", "options": ["Helps control and delay access through physical means", "Replaces visitor management", "Has no relation to life safety", "Only matters outdoors"], "answer": 0, "explanation": "Helps control and delay access through physical means"}, {"id": 72, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::12", "year2025": true, "q": "Which best describes network video?", "options": ["Digital video systems supporting surveillance and review", "A paper log method", "A fire detection-only system", "A type of siren"], "answer": 0, "explanation": "Digital video systems supporting surveillance and review"}, {"id": 73, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::13", "year2025": true, "q": "Which best describes safes and vaults?", "options": ["Protect selected assets through hardened secure storage", "Replace the need for alarm systems everywhere", "Are only for banks", "Are access control software"], "answer": 0, "explanation": "Protect selected assets through hardened secure storage"}, {"id": 74, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::14", "year2025": true, "q": "Which best describes fencing?", "options": ["Defines boundaries and helps deter, delay, and channel access", "Eliminates the need for patrols", "Authorizes arrest automatically", "Works only indoors"], "answer": 0, "explanation": "Defines boundaries and helps deter, delay, and channel access"}, {"id": 75, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::15", "year2025": true, "q": "Which best describes integrated security systems?", "options": ["Combine multiple technologies for coordinated protection", "Mean one device must do everything", "Remove the need for operators", "Are only for high-rise offices"], "answer": 0, "explanation": "Combine multiple technologies for coordinated protection"}, {"id": 76, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::16", "year2025": true, "q": "Which best describes emergency access control?", "options": ["Balancing security with urgent life-safety access needs", "Keeping every door locked during all emergencies", "Stopping responders from entering", "Ignoring audit trails"], "answer": 0, "explanation": "Balancing security with urgent life-safety access needs"}, {"id": 77, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::17", "year2025": true, "q": "Which best describes audit and record keeping in access control?", "options": ["Maintaining records to support accountability and review", "Removing logs to protect privacy", "Avoiding visitor records entirely", "Relying on memory instead of system data"], "answer": 0, "explanation": "Maintaining records to support accountability and review"}, {"id": 78, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::18", "year2025": true, "q": "Which best describes access authorization?", "options": ["Confirming that entry permissions are valid for the person and area", "Letting people enter if they seem familiar", "Granting access whenever a badge is visible", "Treating all employees as unrestricted"], "answer": 0, "explanation": "Confirming that entry permissions are valid for the person and area"}, {"id": 79, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::19", "year2025": true, "q": "Which best describes key control?", "options": ["Managing keys so custody and duplication are controlled", "Leaving spare keys openly available", "Ignoring returned-key records", "Replacing credential systems automatically"], "answer": 0, "explanation": "Managing keys so custody and duplication are controlled"}, {"id": 80, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::20", "year2025": true, "q": "Which best describes electronic access control systems?", "options": ["Use electronic components to manage and record entry", "Always operate without power", "Cannot be integrated with other systems", "Have no effect on accountability"], "answer": 0, "explanation": "Use electronic components to manage and record entry"}, {"id": 81, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::21", "year2025": true, "q": "Which best describes wireless and rfid access?", "options": ["Use radio technologies to support identification or control", "Are automatically more secure in every setting", "Remove the need to verify people", "Can never fail or be misused"], "answer": 0, "explanation": "Use radio technologies to support identification or control"}, {"id": 82, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::22", "year2025": true, "q": "Which best describes database management in access systems?", "options": ["Maintaining accurate permissions and records in the system", "Allowing old permissions to remain forever", "Ignoring terminations or transfers", "Keeping no audit trail"], "answer": 0, "explanation": "Maintaining accurate permissions and records in the system"}, {"id": 83, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::23", "year2025": true, "q": "Which option correctly pairs contraband detection technologies with their purpose?", "options": ["A and B are correct: A. Metal detection helps identify metallic threats. B. X-ray helps inspect contents without opening every item.", "A and C are correct: A. Metal detection replaces all searches. C. Explosive detection is only a badge-access technology.", "B and D are correct: B. X-ray determines criminal intent. D. EAS is a medical alarm tool.", "None of the above"], "answer": 0, "explanation": "Metal detection and X-ray are both detection tools with those purposes; the other statements are false."}, {"id": 84, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::24", "year2025": true, "q": "Which best describes metal detection?", "options": ["Detects metallic items that may be prohibited or threatening", "Identifies all explosives perfectly", "Replaces search procedures entirely", "Only works in warehouses"], "answer": 0, "explanation": "Detects metallic items that may be prohibited or threatening"}, {"id": 85, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::25", "year2025": true, "q": "Which best describes x-ray detection?", "options": ["Helps inspect contents without opening every item", "Determines criminal intent automatically", "Can replace all physical searches and policies", "Only detects liquids"], "answer": 0, "explanation": "Helps inspect contents without opening every item"}, {"id": 86, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::26", "year2025": true, "q": "Which best describes explosive detection?", "options": ["Uses technology or methods to identify explosive threats", "Is the same as badge access", "Replaces bomb assessment", "Only applies to airports"], "answer": 0, "explanation": "Uses technology or methods to identify explosive threats"}, {"id": 87, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::27", "year2025": true, "q": "Which best describes electronic article surveillance?", "options": ["Supports retail theft detection and deterrence", "Is a medical emergency tool", "Is a type of sprinkler", "Means the store no longer needs staff"], "answer": 0, "explanation": "Supports retail theft detection and deterrence"}, {"id": 88, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::28", "year2025": true, "q": "Which best describes gunshot detection technology?", "options": ["Helps identify or locate gunfire events", "Prevents all shootings automatically", "Replaces emergency response plans", "Is a replacement for crowd management"], "answer": 0, "explanation": "Helps identify or locate gunfire events"}, {"id": 89, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::29", "year2025": true, "q": "Which best describes responding to an alarm?", "options": ["Assessing, verifying, and acting according to procedures", "Assuming every alarm is false", "Ignoring alarms if cameras look normal", "Evacuating every time without assessment"], "answer": 0, "explanation": "Assessing, verifying, and acting according to procedures"}, {"id": 90, "subject": "Access Control and Physical Security", "concept": "Access Control and Physical Security::30", "year2025": true, "q": "Which best describes access control in the information age?", "options": ["Must account for data, records, systems, and modern identities as well as physical entry", "Means physical access no longer matters", "Applies only to cyber teams", "Eliminates visitor escort needs"], "answer": 0, "explanation": "Must account for data, records, systems, and modern identities as well as physical entry"}], "Investigations and Incident Management": [{"id": 91, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::1", "year2025": true, "q": "Which best describes investigation purpose?", "options": ["To collect and preserve information that supports decisions and requirements", "To punish people immediately", "To replace all operations after an event", "To prove every suspicion correct"], "answer": 0, "explanation": "To collect and preserve information that supports decisions and requirements"}, {"id": 92, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::2", "year2025": true, "q": "Which best describes investigation and human communication?", "options": ["Communication is central to gathering reliable information", "Communication has no role in fact-finding", "Only physical evidence matters", "Interviewing is separate from investigation"], "answer": 0, "explanation": "Communication is central to gathering reliable information"}, {"id": 93, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::3", "year2025": true, "q": "Which best describes ethics of investigation?", "options": ["Investigations must remain lawful, fair, and professionally bounded", "Any tactic is acceptable if facts are needed", "Deception by the officer is always required", "Privacy never matters"], "answer": 0, "explanation": "Investigations must remain lawful, fair, and professionally bounded"}, {"id": 94, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::4", "year2025": true, "q": "Which best describes preliminary investigation?", "options": ["Early fact-gathering and initial action after an event", "The final court testimony stage", "A replacement for follow-up work", "The stage where evidence is discarded"], "answer": 0, "explanation": "Early fact-gathering and initial action after an event"}, {"id": 95, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::5", "year2025": true, "q": "Which best describes follow-up investigation?", "options": ["Later steps that deepen findings and support conclusions", "A stage that happens before the event", "Only a police task in all cases", "A synonym for rumor checking"], "answer": 0, "explanation": "Later steps that deepen findings and support conclusions"}, {"id": 96, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::6", "year2025": true, "q": "Which best describes liaison in investigation?", "options": ["Coordinating with relevant parties while staying within role and authority", "Sharing all data with anyone interested", "Avoiding all outside contact", "Replacing notes with verbal updates"], "answer": 0, "explanation": "Coordinating with relevant parties while staying within role and authority"}, {"id": 97, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::7", "year2025": true, "q": "Which best describes notes and reports in investigations?", "options": ["Preserve the investigative process and findings", "Matter only if arrest occurs", "Are optional if cameras exist", "Should be rewritten from memory"], "answer": 0, "explanation": "Preserve the investigative process and findings"}, {"id": 98, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::8", "year2025": true, "q": "Which best describes surveillance in investigation?", "options": ["Systematic observation that may support an inquiry", "Any casual looking around", "Automatic proof of guilt", "A substitute for scene control"], "answer": 0, "explanation": "Systematic observation that may support an inquiry"}, {"id": 99, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::9", "year2025": true, "q": "Which best describes testifying in proceedings?", "options": ["Explaining facts and actions credibly in legal or administrative settings", "Arguing the most emotional side", "Guessing when details are forgotten", "Changing facts to match the case theory"], "answer": 0, "explanation": "Explaining facts and actions credibly in legal or administrative settings"}, {"id": 100, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::10", "year2025": true, "q": "Which best describes data security in investigations?", "options": ["Protecting sensitive information gathered during inquiry", "Publishing findings publicly by default", "Ignoring confidentiality", "Treating data as unimportant"], "answer": 0, "explanation": "Protecting sensitive information gathered during inquiry"}, {"id": 101, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::11", "year2025": true, "q": "Which best describes interviewing?", "options": ["A structured process for obtaining information from people", "A guaranteed confession method", "A substitute for evidence collection", "Only useful after charges"], "answer": 0, "explanation": "A structured process for obtaining information from people"}, {"id": 102, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::12", "year2025": true, "q": "Which best describes power of communication in interviews?", "options": ["How words, tone, and listening shape the quality of information received", "Proof that loud questioning works best", "Why notes are unnecessary", "Why interviews can replace reports"], "answer": 0, "explanation": "How words, tone, and listening shape the quality of information received"}, {"id": 103, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::13", "year2025": true, "q": "Which best describes interview process?", "options": ["A series of steps from preparation to conclusion", "Only one spontaneous conversation", "A detention procedure", "A courtroom cross-examination"], "answer": 0, "explanation": "A series of steps from preparation to conclusion"}, {"id": 104, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::14", "year2025": true, "q": "Which best describes deception in interviews?", "options": ["Something to assess carefully without leaping to conclusions", "Automatic guilt whenever present", "A reason to stop documenting", "An excuse to use force"], "answer": 0, "explanation": "Something to assess carefully without leaping to conclusions"}, {"id": 105, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::15", "year2025": true, "q": "Which best describes incident scene definition?", "options": ["A location containing relevant facts, hazards, or evidence about an event", "Any place with a rumor", "A room where reports are written", "Only places with blood"], "answer": 0, "explanation": "A location containing relevant facts, hazards, or evidence about an event"}, {"id": 106, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::16", "year2025": true, "q": "Which best describes hazards to an incident scene?", "options": ["Conditions that can endanger people or damage evidence", "Reasons to ignore the scene", "Only fire hazards", "Only legal hazards"], "answer": 0, "explanation": "Conditions that can endanger people or damage evidence"}, {"id": 107, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::17", "year2025": true, "q": "Which best describes determining scene boundaries?", "options": ["Setting the area that must be controlled and preserved", "Allowing anyone nearby to enter", "Making the smallest area possible regardless of evidence", "Waiting until cleanup begins"], "answer": 0, "explanation": "Setting the area that must be controlled and preserved"}, {"id": 108, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::18", "year2025": true, "q": "Which best describes protecting and preserving the scene?", "options": ["Preventing contamination, loss, or disturbance of relevant evidence", "Moving items to help memory", "Allowing normal traffic to continue", "Focusing only on photographs"], "answer": 0, "explanation": "Preventing contamination, loss, or disturbance of relevant evidence"}, {"id": 109, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::19", "year2025": true, "q": "Which best describes evidence?", "options": ["Anything relevant that can help establish facts about the event", "Only fingerprints and DNA", "Only statements from supervisors", "Only what police later approve"], "answer": 0, "explanation": "Anything relevant that can help establish facts about the event"}, {"id": 110, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::20", "year2025": true, "q": "Which best describes making detailed and accurate notes?", "options": ["Capturing specifics needed for later recall and reporting", "Writing after several days from memory", "Avoiding times and locations", "Including opinions as facts"], "answer": 0, "explanation": "Capturing specifics needed for later recall and reporting"}, {"id": 111, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::21", "year2025": true, "q": "Which best describes working with law enforcement and investigators?", "options": ["Supporting coordination while staying within role and preserving evidence", "Yielding the scene before basic protection is in place", "Giving unauthorized conclusions to media", "Ignoring requests for relevant facts"], "answer": 0, "explanation": "Supporting coordination while staying within role and preserving evidence"}, {"id": 112, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::22", "year2025": true, "q": "Which best describes increasing role of security in scenes?", "options": ["Security often has early responsibilities before specialists arrive", "Security has no scene role", "Security should always search suspicious devices directly", "Security must always evacuate before assessing"], "answer": 0, "explanation": "Security often has early responsibilities before specialists arrive"}, {"id": 113, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::23", "year2025": true, "q": "Which best describes fact-finding?", "options": ["Determining what happened through evidence and information", "Finding the best suspect quickly", "Matching facts to the first theory", "Avoiding contradictory information"], "answer": 0, "explanation": "Determining what happened through evidence and information"}, {"id": 114, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::24", "year2025": true, "q": "Which best describes statement collection?", "options": ["Recording witness or involved accounts accurately", "Using only one witness when more exist", "Combining all statements into one voice", "Skipping time and place details"], "answer": 0, "explanation": "Recording witness or involved accounts accurately"}, {"id": 115, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::25", "year2025": true, "q": "Which best describes chain of custody idea?", "options": ["Maintaining accountability for evidence handling", "Leaving items unmarked to avoid bias", "Discarding low-value evidence immediately", "Assuming photos replace every object"], "answer": 0, "explanation": "Maintaining accountability for evidence handling"}, {"id": 116, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::26", "year2025": true, "q": "Which best describes searches in investigation?", "options": ["Looking for relevant items or facts within authority and procedure", "Searching without legal or policy limits", "Replacing interviews with searching", "Ignoring documentation of search actions"], "answer": 0, "explanation": "Looking for relevant items or facts within authority and procedure"}, {"id": 117, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::27", "year2025": true, "q": "Which best describes administrative proceedings?", "options": ["Internal or non-criminal forums where facts may still matter greatly", "Always identical to criminal court", "Outside security concern entirely", "A reason not to take notes"], "answer": 0, "explanation": "Internal or non-criminal forums where facts may still matter greatly"}, {"id": 118, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::28", "year2025": true, "q": "Which best describes root cause thinking?", "options": ["Looking past the immediate event to why it was allowed to occur", "Blaming the closest person first", "Avoiding systems analysis", "Treating every event as isolated"], "answer": 0, "explanation": "Looking past the immediate event to why it was allowed to occur"}, {"id": 119, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::29", "year2025": true, "q": "Which best describes observation vs conclusion?", "options": ["Separating what was perceived from what is inferred", "Treating both as identical", "Preferring conclusion to observation", "Leaving observations out"], "answer": 0, "explanation": "Separating what was perceived from what is inferred"}, {"id": 120, "subject": "Investigations and Incident Management", "concept": "Investigations and Incident Management::30", "year2025": true, "q": "Which best describes minor is major principle?", "options": ["Small issues may indicate larger misconduct or broader patterns", "Minor issues are not worth documenting", "Only felonies matter to management", "Every small issue proves a major crime"], "answer": 0, "explanation": "Small issues may indicate larger misconduct or broader patterns"}], "Legal and Rule Enforcement": [{"id": 121, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::1", "year2025": true, "q": "Which best describes rule enforcement?", "options": ["Ensuring lawful rules and site requirements are followed", "Applying personal preferences as law", "Replacing all customer service", "Using force whenever a rule is broken"], "answer": 0, "explanation": "Ensuring lawful rules and site requirements are followed"}, {"id": 122, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::2", "year2025": true, "q": "Which best describes organizational rules?", "options": ["Standards created by the organization for safety, security, and operations", "Public criminal statutes only", "Optional suggestions without consequence", "Automatic grounds for arrest"], "answer": 0, "explanation": "Standards created by the organization for safety, security, and operations"}, {"id": 123, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::3", "year2025": true, "q": "Which best describes duty of care?", "options": ["Acting reasonably and prudently within training, policy, and circumstances", "Guaranteeing no harm ever occurs", "Acting only when ordered in writing", "Taking the highest-risk option first"], "answer": 0, "explanation": "Acting reasonably and prudently within training, policy, and circumstances"}, {"id": 124, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::4", "year2025": true, "q": "Which best describes development of laws?", "options": ["Law has historical development across different legal traditions", "Law was created solely for security officers", "Civil law does not affect security", "Only criminal law matters to private security"], "answer": 0, "explanation": "Law has historical development across different legal traditions"}, {"id": 125, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::5", "year2025": true, "q": "Which best describes criminal and civil law?", "options": ["Different bodies of law with different purposes and consequences", "The same thing with different names", "Only civil law affects officers", "Only criminal law creates liability"], "answer": 0, "explanation": "Different bodies of law with different purposes and consequences"}, {"id": 126, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::6", "year2025": true, "q": "Which best describes international standards and human rights?", "options": ["Private security operations may be guided by human rights and international standards", "Only domestic criminal codes matter", "Human rights have no relevance to security", "Standards automatically replace laws"], "answer": 0, "explanation": "Private security operations may be guided by human rights and international standards"}, {"id": 127, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::7", "year2025": true, "q": "Which best describes voluntary principles on security and human rights?", "options": ["A framework addressing security and human rights concerns", "A force escalation ladder", "A fire prevention program", "A drone operating rule"], "answer": 0, "explanation": "A framework addressing security and human rights concerns"}, {"id": 128, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::8", "year2025": true, "q": "Which best describes montreux document?", "options": ["An international reference related to private security and humanitarian concerns", "A retail theft database", "A crowd management statute", "A CPR standard"], "answer": 0, "explanation": "An international reference related to private security and humanitarian concerns"}, {"id": 129, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::9", "year2025": true, "q": "Which best describes un guiding principles on business and human rights?", "options": ["A framework linking business conduct and human rights responsibilities", "A bomb threat checklist", "A training waiver process", "An access badge protocol"], "answer": 0, "explanation": "A framework linking business conduct and human rights responsibilities"}, {"id": 130, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::10", "year2025": true, "q": "Which best describes international code of conduct for private security?", "options": ["A conduct framework for private security providers", "A local parking bylaw", "A visitor log template", "A use-of-force weapon guide"], "answer": 0, "explanation": "A conduct framework for private security providers"}, {"id": 131, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::11", "year2025": true, "q": "Which option is correct about lawful use of force?", "options": ["A and B are correct: A. Force must be lawful. B. Force must be necessary.", "A and C are correct: A. Force must be lawful. C. Force is preferred before de-escalation.", "B and D are correct: B. Force must be necessary. D. Force has no reporting implications.", "None of the above"], "answer": 0, "explanation": "The text stresses lawful, necessary, and reasonable force; force is not preferred and still requires reporting."}, {"id": 132, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::12", "year2025": true, "q": "Which best describes use of force in general?", "options": ["Force must be lawful, necessary, and reasonable", "Force is a preferred first response", "Force has no reporting implications", "Force is identical for all situations"], "answer": 0, "explanation": "Force must be lawful, necessary, and reasonable"}, {"id": 133, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::13", "year2025": true, "q": "Which best describes retreat concept?", "options": ["A legal or tactical issue that may depend on jurisdiction and circumstance", "A mandatory rule in every security situation worldwide", "A replacement for de-escalation", "A reason to ignore safety distance"], "answer": 0, "explanation": "A legal or tactical issue that may depend on jurisdiction and circumstance"}, {"id": 134, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::14", "year2025": true, "q": "Which best describes force alternatives?", "options": ["Options that may reduce the need for higher force", "Proof that force is always required", "A replacement for communication", "Only weapon choices"], "answer": 0, "explanation": "Options that may reduce the need for higher force"}, {"id": 135, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::15", "year2025": true, "q": "Which best describes excessive force liability?", "options": ["Using more force than justified can create serious liability", "Liability exists only if injury is permanent", "Reports are unnecessary after force", "Good intent removes all liability"], "answer": 0, "explanation": "Using more force than justified can create serious liability"}, {"id": 136, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::16", "year2025": true, "q": "Which best describes arrest and detention distinctions?", "options": ["Detention and arrest raise different legal and practical issues", "Security has unlimited arrest powers", "Detention never requires reasonableness", "Arrest is only a paperwork term"], "answer": 0, "explanation": "Detention and arrest raise different legal and practical issues"}, {"id": 137, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::17", "year2025": true, "q": "Which best describes search and seizure concerns?", "options": ["Officers must understand legal and policy limits around searching and taking property", "All searches are allowed on private property", "Search authority makes documentation unnecessary", "Seizure always means criminal arrest"], "answer": 0, "explanation": "Officers must understand legal and policy limits around searching and taking property"}, {"id": 138, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::18", "year2025": true, "q": "Which best describes self-control formula?", "options": ["Maintaining composure helps lawful and safe decision-making", "Anger improves compliance", "Stress removes the need for judgment", "Urgency justifies any response"], "answer": 0, "explanation": "Maintaining composure helps lawful and safe decision-making"}, {"id": 139, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::19", "year2025": true, "q": "Which best describes conflict resolution formats?", "options": ["Structured communication can reduce escalation", "Conflict is resolved mainly by threats", "Formats are unnecessary in security", "Only police may resolve conflict"], "answer": 0, "explanation": "Structured communication can reduce escalation"}, {"id": 140, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::20", "year2025": true, "q": "Which best describes aggressive behavior response?", "options": ["De-escalation and safety-focused action are central", "Aggression should always be matched immediately", "Distance does not matter", "Verbal skills are a weakness"], "answer": 0, "explanation": "De-escalation and safety-focused action are central"}, {"id": 141, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::21", "year2025": true, "q": "Which best describes officer safety issues?", "options": ["Positioning, awareness, backup, and judgment matter to safe handling", "Safety is separate from legal issues", "Safety matters only during arrest", "Officer safety is mostly equipment"], "answer": 0, "explanation": "Positioning, awareness, backup, and judgment matter to safe handling"}, {"id": 142, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::22", "year2025": true, "q": "Which best describes optimal distance?", "options": ["Distance can increase reaction time and reduce danger", "Closer is always better", "Distance is disrespectful", "Distance only matters outdoors"], "answer": 0, "explanation": "Distance can increase reaction time and reduce danger"}, {"id": 143, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::23", "year2025": true, "q": "Which best describes elements of aggression?", "options": ["Understanding cues and behavior helps intervention", "Aggression has no warning signs", "Only physical attack counts as aggression", "Documentation should wait until after control"], "answer": 0, "explanation": "Understanding cues and behavior helps intervention"}, {"id": 144, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::24", "year2025": true, "q": "Which best describes verbal de-escalation?", "options": ["Using communication to reduce tension and gain safer outcomes", "Talking shows weakness", "It replaces all protective action", "It is only for customer service"], "answer": 0, "explanation": "Using communication to reduce tension and gain safer outcomes"}, {"id": 145, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::25", "year2025": true, "q": "Which best describes mental health and security?", "options": ["Security may interact with persons experiencing mental health issues and should respond professionally", "Mental health issues always equal violence", "Only medical staff may speak to distressed persons", "Reports are not needed for mental health events"], "answer": 0, "explanation": "Security may interact with persons experiencing mental health issues and should respond professionally"}, {"id": 146, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::26", "year2025": true, "q": "Which best describes crisis behavior stages?", "options": ["Behavior can escalate through recognizable stages", "All crises look identical", "Only physical violence matters", "Stages replace judgment"], "answer": 0, "explanation": "Behavior can escalate through recognizable stages"}, {"id": 147, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::27", "year2025": true, "q": "Which best describes active listening?", "options": ["Listening to understand and guide safer interaction", "Waiting silently without response", "Repeating orders louder", "Interrupting to control the person"], "answer": 0, "explanation": "Listening to understand and guide safer interaction"}, {"id": 148, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::28", "year2025": true, "q": "Which best describes team intervention?", "options": ["Coordinated action can improve safety in difficult situations", "More people always worsen outcomes", "Teams remove the need for communication", "Only one officer should ever engage"], "answer": 0, "explanation": "Coordinated action can improve safety in difficult situations"}, {"id": 149, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::29", "year2025": true, "q": "Which best describes substance misuse in the workplace?", "options": ["Can affect safety, behavior, and operational risk", "Has no link to asset protection", "Is only a medical matter, never security-related", "Can be ignored unless police attend"], "answer": 0, "explanation": "Can affect safety, behavior, and operational risk"}, {"id": 150, "subject": "Legal and Rule Enforcement", "concept": "Legal and Rule Enforcement::30", "year2025": true, "q": "Which best describes apprehension reasonableness?", "options": ["Reasonableness is central to lawful, defensible action", "Detention authority is unlimited if theft is suspected", "Results matter more than method", "Minor force reporting is optional"], "answer": 0, "explanation": "Reasonableness is central to lawful, defensible action"}], "Patrol, Awareness, Robotics, and Automation": [{"id": 151, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::1", "year2025": true, "q": "Which best describes purpose of patrol?", "options": ["To identify events requiring reporting or intervention and maintain visible presence", "To replace access control entirely", "To guarantee crime-free conditions", "To avoid interaction with the public"], "answer": 0, "explanation": "To identify events requiring reporting or intervention and maintain visible presence"}, {"id": 152, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::2", "year2025": true, "q": "Which best describes types of patrol?", "options": ["Patrol may be physical or electronic and vary by environment", "Patrol means foot patrol only", "Only vehicle patrol counts as patrol", "Patrol is the same as investigation"], "answer": 0, "explanation": "Patrol may be physical or electronic and vary by environment"}, {"id": 153, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::3", "year2025": true, "q": "Which best describes preparation for patrol?", "options": ["Knowledge of site, equipment, post orders, and hazards", "Starting immediately without briefing", "Skipping equipment checks to save time", "Treating every patrol the same regardless of site"], "answer": 0, "explanation": "Knowledge of site, equipment, post orders, and hazards"}, {"id": 154, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::4", "year2025": true, "q": "Which best describes equipment check?", "options": ["Confirming tools are ready before patrol", "A task done only after an incident", "Only checking radios", "Ignoring body-worn equipment"], "answer": 0, "explanation": "Confirming tools are ready before patrol"}, {"id": 155, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::5", "year2025": true, "q": "Which best describes techniques of patrol?", "options": ["Using deliberate methods to observe, deter, and detect", "Walking the exact same route at the exact same time always", "Avoiding documentation of patrol findings", "Prioritizing speed over observation"], "answer": 0, "explanation": "Using deliberate methods to observe, deter, and detect"}, {"id": 156, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::6", "year2025": true, "q": "Which best describes unethical patrol practices?", "options": ["Shortcuts and neglect that weaken protection and professionalism", "Any patrol done without a partner", "Using a flashlight at night", "Signing in before duty"], "answer": 0, "explanation": "Shortcuts and neglect that weaken protection and professionalism"}, {"id": 157, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::7", "year2025": true, "q": "Which best describes body-worn cameras goal?", "options": ["Supporting accountability and record of interactions where used", "Replacing all written reporting", "Granting extra legal authority", "Eliminating privacy concerns"], "answer": 0, "explanation": "Supporting accountability and record of interactions where used"}, {"id": 158, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::8", "year2025": true, "q": "Which best describes robotics as force multipliers?", "options": ["Robots supplement human ability in integrated security", "Robots should replace every officer", "Robotics removes the need for training", "Robots can handle every judgment decision"], "answer": 0, "explanation": "Robots supplement human ability in integrated security"}, {"id": 159, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::9", "year2025": true, "q": "Which best describes robotics in security?", "options": ["May support patrols, observation, and other tasks", "Are only useful in entertainment venues", "Cannot contribute to surveillance", "Have no limitations"], "answer": 0, "explanation": "May support patrols, observation, and other tasks"}, {"id": 160, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::10", "year2025": true, "q": "Which best describes drones in security?", "options": ["Can supplement patrol, situational awareness, inspections, and alert confirmation", "Are intended to replace humans entirely", "Can operate without regard to law or policy", "Are only useful during daylight patrol"], "answer": 0, "explanation": "Can supplement patrol, situational awareness, inspections, and alert confirmation"}, {"id": 161, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::11", "year2025": true, "q": "Which best describes robotics and drones limitation?", "options": ["They supplement human abilities, not replace them", "They eliminate operator judgment", "They provide permanent 24/7 unlimited coverage", "They remove all training needs"], "answer": 0, "explanation": "They supplement human abilities, not replace them"}, {"id": 162, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::12", "year2025": true, "q": "Which best describes long-range and thermal scanning?", "options": ["Robotics and drones can extend detection beyond human sight", "They are identical to paper reports", "They are used only for customer service", "They remove the need for confirmation"], "answer": 0, "explanation": "Robotics and drones can extend detection beyond human sight"}, {"id": 163, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::13", "year2025": true, "q": "Which best describes ai and machine learning use?", "options": ["May help identify patterns of risk behavior", "Guarantee perfect prediction of crime", "Replace policy and procedure", "Are prohibited in all security uses"], "answer": 0, "explanation": "May help identify patterns of risk behavior"}, {"id": 164, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::14", "year2025": true, "q": "Which best describes security culture?", "options": ["Shared attitudes and behaviors that support security in the organization", "A security badge color scheme", "A law enforcement rank chart", "A type of alarm signal"], "answer": 0, "explanation": "Shared attitudes and behaviors that support security in the organization"}, {"id": 165, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::15", "year2025": true, "q": "Which best describes security awareness?", "options": ["Understanding risks and behaviors that affect security", "A replacement for all hardware", "Only the job of managers", "Something done only after incidents"], "answer": 0, "explanation": "Understanding risks and behaviors that affect security"}, {"id": 166, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::16", "year2025": true, "q": "Which best describes situational awareness?", "options": ["Recognizing what is happening and what it may mean", "A synonym for guesswork", "Ignoring context to stay neutral", "A report format"], "answer": 0, "explanation": "Recognizing what is happening and what it may mean"}, {"id": 167, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::17", "year2025": true, "q": "Which best describes expanding the security team?", "options": ["Engaging wider stakeholders in awareness and protective effort", "Reducing security to only the uniformed team", "Keeping all security knowledge secret from staff", "Replacing officers with volunteers"], "answer": 0, "explanation": "Engaging wider stakeholders in awareness and protective effort"}, {"id": 168, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::18", "year2025": true, "q": "Which best describes automation in protection operations?", "options": ["Using systems and tools to support protection functions", "Replacing all procedures with software", "Only a historical topic", "A reason to reduce oversight"], "answer": 0, "explanation": "Using systems and tools to support protection functions"}, {"id": 169, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::19", "year2025": true, "q": "Which best describes contemporary security environment?", "options": ["Modern protection operates amid expanded risks and technology", "Today's risks are simpler than before", "Automation removes the need for critical thinking", "Traditional threats no longer matter"], "answer": 0, "explanation": "Modern protection operates amid expanded risks and technology"}, {"id": 170, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::20", "year2025": true, "q": "Which best describes alarm monitoring?", "options": ["Watching systems for signals requiring action", "Ignoring nuisance alarms forever", "Treating all alarms as failures of staff", "Only useful when police are on site"], "answer": 0, "explanation": "Watching systems for signals requiring action"}, {"id": 171, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::21", "year2025": true, "q": "Which best describes operator interface?", "options": ["The means by which operators view and manage systems", "A legal arrest form", "A camera lens setting", "A patrol training waiver"], "answer": 0, "explanation": "The means by which operators view and manage systems"}, {"id": 172, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::22", "year2025": true, "q": "Which best describes alarm sensors?", "options": ["Devices that detect specified conditions and send signals", "Only smoke detectors", "Only intrusion contacts", "Only wearable devices"], "answer": 0, "explanation": "Devices that detect specified conditions and send signals"}, {"id": 173, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::23", "year2025": true, "q": "Which best describes duress alarm?", "options": ["A signal intended to indicate distress or danger", "A maintenance warning", "A weather advisory", "A normal visitor request"], "answer": 0, "explanation": "A signal intended to indicate distress or danger"}, {"id": 174, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::24", "year2025": true, "q": "Which best describes nuisance alarm?", "options": ["An alarm condition that is unwanted or not genuine and still must be managed properly", "Proof the system is useless", "A reason to disconnect monitoring", "The same as a duress alarm"], "answer": 0, "explanation": "An alarm condition that is unwanted or not genuine and still must be managed properly"}, {"id": 175, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::25", "year2025": true, "q": "Which best describes alarm response?", "options": ["Procedural action after an alarm signal", "Assuming the alarm is false unless visible damage exists", "Waiting until shift end to verify", "Skipping documentation because the system logs it"], "answer": 0, "explanation": "Procedural action after an alarm signal"}, {"id": 176, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::26", "year2025": true, "q": "Which best describes central alarm station importance?", "options": ["A control room may function as the nerve center of safety and security operations", "It is optional if there are cameras", "It matters only in retail", "It replaces patrol completely"], "answer": 0, "explanation": "A control room may function as the nerve center of safety and security operations"}, {"id": 177, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::27", "year2025": true, "q": "Which best describes monitoring systems types?", "options": ["A central station may monitor alarm, access, fire, BAS, and video systems", "Only intrusion alarms matter", "Monitoring types are identical", "Monitoring ends once a building closes"], "answer": 0, "explanation": "A central station may monitor alarm, access, fire, BAS, and video systems"}, {"id": 178, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::28", "year2025": true, "q": "Which best describes sensors across systems?", "options": ["Different systems use different sensors for different purposes", "All sensors are interchangeable", "Sensors only matter in fire systems", "Operators do not need to know sensor types"], "answer": 0, "explanation": "Different systems use different sensors for different purposes"}, {"id": 179, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::29", "year2025": true, "q": "Which best describes transmission media?", "options": ["Signals move through communication paths from sensors to processors", "Media refers only to news outlets", "Transmission media is unrelated to alarms", "It means written reports only"], "answer": 0, "explanation": "Signals move through communication paths from sensors to processors"}, {"id": 180, "subject": "Patrol, Awareness, Robotics, and Automation", "concept": "Patrol, Awareness, Robotics, and Automation::30", "year2025": true, "q": "Which best describes visitor management systems?", "options": ["Systems that help manage and document visitor flow and access", "A replacement for authorization", "Only used in emergencies", "A fire code term"], "answer": 0, "explanation": "Systems that help manage and document visitor flow and access"}], "Emergency Planning and Response": [{"id": 181, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::1", "year2025": true, "q": "Which best describes emergency planning?", "options": ["Preparing for potential emergencies before they occur", "Improvising once disruption begins", "Evacuating immediately for every threat", "Writing only a contact list"], "answer": 0, "explanation": "Preparing for potential emergencies before they occur"}, {"id": 182, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::2", "year2025": true, "q": "Which best describes types of potential emergencies?", "options": ["Emergencies can vary widely and planning should reflect that", "Only fire and medical incidents count", "Only criminal attacks require planning", "Every site faces the exact same emergency profile"], "answer": 0, "explanation": "Emergencies can vary widely and planning should reflect that"}, {"id": 183, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::3", "year2025": true, "q": "Which best describes scope of the problem?", "options": ["Understanding how broad and serious potential impacts may be", "Assuming every event affects only one room", "Avoiding consequence analysis", "Focusing only on equipment loss"], "answer": 0, "explanation": "Understanding how broad and serious potential impacts may be"}, {"id": 184, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::4", "year2025": true, "q": "Which best describes risk assessment in planning?", "options": ["Assessing threats, vulnerabilities, and impacts to guide plans", "A separate topic unrelated to emergencies", "Only for insurance claims", "Done only after drills"], "answer": 0, "explanation": "Assessing threats, vulnerabilities, and impacts to guide plans"}, {"id": 185, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::5", "year2025": true, "q": "Which best describes developing the emergency response plan?", "options": ["Creating procedures, roles, and resources for emergencies", "Relying on memory and experience only", "Avoiding written plans to stay flexible", "Using one generic plan without adaptation"], "answer": 0, "explanation": "Creating procedures, roles, and resources for emergencies"}, {"id": 186, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::6", "year2025": true, "q": "Which best describes reviewing and integrating plans?", "options": ["Plans must be reviewed and connected with operations and partners", "Plans should remain static once written", "Integration weakens command", "Review is needed only after lawsuits"], "answer": 0, "explanation": "Plans must be reviewed and connected with operations and partners"}, {"id": 187, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::7", "year2025": true, "q": "Which best describes active assailant preparedness?", "options": ["Planning beyond a narrow active-shooter script", "Treating every hostile event as identical", "Assuming mental health is the only cause", "Relying only on armed response"], "answer": 0, "explanation": "Planning beyond a narrow active-shooter script"}, {"id": 188, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::8", "year2025": true, "q": "Which best describes workplace violence prevention?", "options": ["Reducing the chance of violence through broader prevention efforts", "Waiting for an attack before action", "Treating warning signs as harmless by default", "Leaving security out of prevention"], "answer": 0, "explanation": "Reducing the chance of violence through broader prevention efforts"}, {"id": 189, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::9", "year2025": true, "q": "Which best describes threat detection and assessment?", "options": ["Identifying concerning behaviors and evaluating threat significance", "The same as panic", "A reason to detain everyone who is odd", "A replacement for planning"], "answer": 0, "explanation": "Identifying concerning behaviors and evaluating threat significance"}, {"id": 190, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::10", "year2025": true, "q": "Which best describes security measures for active assailant?", "options": ["Protective measures should support readiness and response", "Only locks matter", "Only cameras matter", "Only police planning matters"], "answer": 0, "explanation": "Protective measures should support readiness and response"}, {"id": 191, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::11", "year2025": true, "q": "Which best describes weapons policies?", "options": ["Policies affect preparedness and operational response", "Policies never matter during emergencies", "Weapons policy is only a public police issue", "Policies replace training"], "answer": 0, "explanation": "Policies affect preparedness and operational response"}, {"id": 192, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::12", "year2025": true, "q": "Which best describes role of protection officers in active assailant situations?", "options": ["They have defined roles in preparedness, response support, and coordination", "They have no role until the event ends", "They should always pursue the attacker alone", "They replace emergency medical services"], "answer": 0, "explanation": "They have defined roles in preparedness, response support, and coordination"}, {"id": 193, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::13", "year2025": true, "q": "Which best describes law enforcement and emergency response coordination?", "options": ["External responders are key partners and plans should reflect coordination", "Coordination is optional", "Security should conceal all information until ordered", "Only one agency should know the plan"], "answer": 0, "explanation": "External responders are key partners and plans should reflect coordination"}, {"id": 194, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::14", "year2025": true, "q": "Which best describes all hazards approach to hazardous materials?", "options": ["A broad method for handling varied hazardous material incidents", "A focus only on flammable liquids", "A policy for bomb threats only", "A training method for customer service"], "answer": 0, "explanation": "A broad method for handling varied hazardous material incidents"}, {"id": 195, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::15", "year2025": true, "q": "Which best describes hazardous material incident initial response?", "options": ["Early protective actions and use of tools and resources matter", "Every hazmat event requires immediate hands-on searching by security", "Reports can wait until cleanup", "The first step is media notification"], "answer": 0, "explanation": "Early protective actions and use of tools and resources matter"}, {"id": 196, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::16", "year2025": true, "q": "Which best describes response models and templates?", "options": ["Frameworks help structure hazardous material response", "Templates replace training completely", "Every hazard uses the same PPE and perimeter", "Models are unnecessary if officers are calm"], "answer": 0, "explanation": "Frameworks help structure hazardous material response"}, {"id": 197, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::17", "year2025": true, "q": "Which best describes bomb threat assessment?", "options": ["Assessing facts and context rather than reacting blindly", "Ignoring every bomb threat because hoaxes are common", "Evacuating instantly without thought every time", "Treating the caller's threat as proof of a device"], "answer": 0, "explanation": "Assessing facts and context rather than reacting blindly"}, {"id": 198, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::18", "year2025": true, "q": "Which option best reflects the book's bomb-threat guidance?", "options": ["A and B are correct: A. Assessment matters. B. Immediate evacuation may increase danger in some situations.", "A and C are correct: A. Assessment matters. C. Every bomb threat should be ignored because hoaxes are common.", "B and D are correct: B. Immediate evacuation may increase danger. D. Search routes never matter.", "None of the above"], "answer": 0, "explanation": "The chapter argues that assessment matters and that immediate evacuation can sometimes increase risk."}, {"id": 199, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::19", "year2025": true, "q": "Which best describes immediate evacuation question?", "options": ["The book argues immediate evacuation after a bomb threat may increase danger in some situations", "Immediate evacuation is always the safest response", "Bomb threats should never change operations", "Evacuation routes do not matter"], "answer": 0, "explanation": "The book argues immediate evacuation after a bomb threat may increase danger in some situations"}, {"id": 200, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::20", "year2025": true, "q": "Which best describes heightened security?", "options": ["A focused security posture that restricts access and movement during bomb-threat assessment", "The same as doing nothing until police arrive", "A public relations slogan", "A replacement for emergency plans"], "answer": 0, "explanation": "A focused security posture that restricts access and movement during bomb-threat assessment"}, {"id": 201, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::21", "year2025": true, "q": "Which best describes secondary attack concept?", "options": ["Attackers may exploit evacuation or response movements to create more casualties", "Secondary attacks are only military concerns", "Evacuation is never targeted by attackers", "Secondary attacks matter only outdoors"], "answer": 0, "explanation": "Attackers may exploit evacuation or response movements to create more casualties"}, {"id": 202, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::22", "year2025": true, "q": "Which best describes evacuation routes search?", "options": ["Routes should be searched before evacuation when feasible", "Routes never need review during bomb threats", "Only elevators need checking", "The police can search after everyone leaves"], "answer": 0, "explanation": "Routes should be searched before evacuation when feasible"}, {"id": 203, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::23", "year2025": true, "q": "Which best describes fire basics?", "options": ["Understanding how fire starts and behaves supports prevention and response", "Fire knowledge matters only for firefighters", "Security officers should avoid fire concepts", "All fires behave alike"], "answer": 0, "explanation": "Understanding how fire starts and behaves supports prevention and response"}, {"id": 204, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::24", "year2025": true, "q": "Which best describes prevention methods for fire?", "options": ["Reducing ignition and unsafe conditions before fire starts", "Waiting for smoke before action", "Focusing only on extinguishers", "Ignoring housekeeping"], "answer": 0, "explanation": "Reducing ignition and unsafe conditions before fire starts"}, {"id": 205, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::25", "year2025": true, "q": "Which best describes detection methods for fire?", "options": ["Systems and sensors help detect fire conditions early", "Detection eliminates the need for plans", "Only people can detect fire", "Detection is the same as containment"], "answer": 0, "explanation": "Systems and sensors help detect fire conditions early"}, {"id": 206, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::26", "year2025": true, "q": "Which best describes fire types?", "options": ["Different classes of fire require proper understanding", "There is only one kind of fire for response", "Fire type matters only after investigation", "All extinguishers work the same"], "answer": 0, "explanation": "Different classes of fire require proper understanding"}, {"id": 207, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::27", "year2025": true, "q": "Which best describes extinguishers?", "options": ["Different extinguishers suit different fire classes", "One extinguisher covers every hazard equally", "Extinguishers replace evacuation planning", "Only maintenance staff should know extinguisher types"], "answer": 0, "explanation": "Different extinguishers suit different fire classes"}, {"id": 208, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::28", "year2025": true, "q": "Which best describes containment?", "options": ["Stopping or slowing fire spread through building features or action", "The same as extinguishment", "A reporting method only", "Unrelated to fire plans"], "answer": 0, "explanation": "Stopping or slowing fire spread through building features or action"}, {"id": 209, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::29", "year2025": true, "q": "Which best describes fire as a weapon?", "options": ["Fire can be used intentionally and must be considered in security thinking", "Fire is always accidental", "Arson is only a police concern after the fact", "Security plans should ignore intentional fire"], "answer": 0, "explanation": "Fire can be used intentionally and must be considered in security thinking"}, {"id": 210, "subject": "Emergency Planning and Response", "concept": "Emergency Planning and Response::30", "year2025": true, "q": "Which best describes strikes and lockouts planning?", "options": ["Labor activity requires planning, awareness, and lawful conduct", "Security should treat all labor activity as crime", "Searches and surveillance are never relevant", "The disciplinary process is the same as labor relations"], "answer": 0, "explanation": "Labor activity requires planning, awareness, and lawful conduct"}], "Fire, WHMIS, and First Aid": [{"id": 211, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::1", "year2025": true, "q": "Which best describes class a fire?", "options": ["Ordinary combustibles such as wood, paper, and cloth", "Flammable liquids", "Energized electrical equipment", "Cooking oils and fats"], "answer": 0, "explanation": "Ordinary combustibles such as wood, paper, and cloth"}, {"id": 212, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::2", "year2025": true, "q": "Which best describes class b fire?", "options": ["Flammable liquids and similar fuels", "Combustible metals", "Ordinary combustibles", "Medical gas only"], "answer": 0, "explanation": "Flammable liquids and similar fuels"}, {"id": 213, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::3", "year2025": true, "q": "Which best describes class c fire?", "options": ["Energized electrical equipment", "Ordinary combustibles", "Combustible metals", "Cooking oils and fats"], "answer": 0, "explanation": "Energized electrical equipment"}, {"id": 214, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::4", "year2025": true, "q": "Which best describes class d fire?", "options": ["Combustible metals", "Live electrical wiring only", "Paper products", "Kitchen grease"], "answer": 0, "explanation": "Combustible metals"}, {"id": 215, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::5", "year2025": true, "q": "Which best describes class k fire?", "options": ["Cooking oils and fats", "Combustible metals", "Office paper", "Live circuits"], "answer": 0, "explanation": "Cooking oils and fats"}, {"id": 216, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::6", "year2025": true, "q": "Which best describes sds purpose?", "options": ["Provide safety information about hazardous products", "Replace all training", "Serve as detention paperwork", "Only list the product price"], "answer": 0, "explanation": "Provide safety information about hazardous products"}, {"id": 217, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::7", "year2025": true, "q": "Which best describes whmis labels?", "options": ["Communicate hazards and precautions on products", "Replace emergency response planning", "Apply only after a spill", "Are optional if staff are experienced"], "answer": 0, "explanation": "Communicate hazards and precautions on products"}, {"id": 218, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::8", "year2025": true, "q": "Which best describes hazard awareness?", "options": ["Recognizing and reducing hazards before harm occurs", "A type of alarm verification", "Only a legal issue", "A replacement for PPE"], "answer": 0, "explanation": "Recognizing and reducing hazards before harm occurs"}, {"id": 219, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::9", "year2025": true, "q": "Which option is correct about the cardiac chain of survival?", "options": ["A and B are correct: A. Early recognition matters. B. Rapid defibrillation matters.", "A and C are correct: A. Early recognition matters. C. Waiting for supervisors is the preferred first step.", "B and D are correct: B. Rapid defibrillation matters. D. Only hospitals are part of the chain.", "None of the above"], "answer": 0, "explanation": "The chain emphasizes early recognition and rapid defibrillation, not waiting."}, {"id": 220, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::10", "year2025": true, "q": "Which best describes cardiac chain of survival?", "options": ["Early recognition, early CPR, rapid defibrillation, and advanced care improve outcomes", "Waiting for supervisors first", "Defibrillation is always the first step", "Only hospitals are part of the chain"], "answer": 0, "explanation": "Early recognition, early CPR, rapid defibrillation, and advanced care improve outcomes"}, {"id": 221, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::11", "year2025": true, "q": "Which best describes cpr value?", "options": ["Helps maintain circulation and oxygen delivery until higher care is available", "Replaces all bleeding control", "Is only used after a person wakes up", "Is a legal reporting standard"], "answer": 0, "explanation": "Helps maintain circulation and oxygen delivery until higher care is available"}, {"id": 222, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::12", "year2025": true, "q": "Which option is correct about Stop the Bleed?", "options": ["A and B are correct: A. Immediate bleeding control can save lives. B. Direct pressure may be appropriate.", "A and C are correct: A. Immediate bleeding control can save lives. C. Bleeding control should wait for EMS.", "B and D are correct: B. Direct pressure may be appropriate. D. Only police may apply tourniquets.", "None of the above"], "answer": 0, "explanation": "Stop the Bleed focuses on immediate life-saving action before EMS arrival."}, {"id": 223, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::13", "year2025": true, "q": "Which best describes stop the bleed?", "options": ["Immediate bleeding control before EMS arrival can save lives", "Bleeding control should wait for paramedics", "CPR replaces severe bleeding control", "Only police may apply a tourniquet"], "answer": 0, "explanation": "Immediate bleeding control before EMS arrival can save lives"}, {"id": 224, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::14", "year2025": true, "q": "Which best describes individual patrol officer kit?", "options": ["A small kit with lifesaving tools the officer can carry", "A type of visitor badge pouch", "A radio battery pack", "A patrol schedule envelope"], "answer": 0, "explanation": "A small kit with lifesaving tools the officer can carry"}, {"id": 225, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::15", "year2025": true, "q": "Which best describes tourniquet role?", "options": ["A tool to help control severe extremity bleeding", "A restraint device for compliance", "A replacement for CPR", "Used only for minor cuts"], "answer": 0, "explanation": "A tool to help control severe extremity bleeding"}, {"id": 226, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::16", "year2025": true, "q": "Which best describes direct pressure?", "options": ["An immediate bleeding-control technique", "A way to test fractures", "A fire suppression tactic", "An alarm reset method"], "answer": 0, "explanation": "An immediate bleeding-control technique"}, {"id": 227, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::17", "year2025": true, "q": "Which best describes first aid training importance?", "options": ["Well-trained officers can provide value in critical life-and-death situations", "First aid is outside security work", "Training matters only to medical staff", "First aid is mainly public relations"], "answer": 0, "explanation": "Well-trained officers can provide value in critical life-and-death situations"}, {"id": 228, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::18", "year2025": true, "q": "Which best describes prepared first responder idea?", "options": ["Security should be ready to respond to safety, security, or medical emergencies", "Security should avoid medical scenes", "Preparedness weakens liability protection", "Only external responders should act"], "answer": 0, "explanation": "Security should be ready to respond to safety, security, or medical emergencies"}, {"id": 229, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::19", "year2025": true, "q": "Which best describes hazardous materials role of protection officer?", "options": ["Protection officers have a role in recognizing, reporting, and supporting response", "They should always identify chemicals by smell", "They should handle every substance directly", "Hazmat is unrelated to asset protection"], "answer": 0, "explanation": "Protection officers have a role in recognizing, reporting, and supporting response"}, {"id": 230, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::20", "year2025": true, "q": "Which best describes tools and resources in hazmat?", "options": ["Response depends on proper references, equipment, and procedure", "Improvisation replaces resources", "Only fire alarms matter", "Resources are useful only after cleanup"], "answer": 0, "explanation": "Response depends on proper references, equipment, and procedure"}, {"id": 231, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::21", "year2025": true, "q": "Which best describes the initial response in hazmat?", "options": ["Early actions matter and should follow the plan", "Every spill requires immediate hands-on cleanup by security", "Documentation is the first and only task", "Initial response is a police-only issue"], "answer": 0, "explanation": "Early actions matter and should follow the plan"}, {"id": 232, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::22", "year2025": true, "q": "Which best describes safety and security responsibility?", "options": ["The officer should help maintain a safe and secure workplace", "Only management is responsible", "Responsibility begins after an incident", "Security should prioritize image over safety"], "answer": 0, "explanation": "The officer should help maintain a safe and secure workplace"}, {"id": 233, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::23", "year2025": true, "q": "Which best describes confidentiality in the code of ethics?", "options": ["Confidential information must be guarded and not compromised", "Confidentiality applies only to criminal cases", "Sharing confidential details helps teamwork automatically", "Confidentiality is optional off duty"], "answer": 0, "explanation": "Confidential information must be guarded and not compromised"}, {"id": 234, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::24", "year2025": true, "q": "Which best describes law enforcement liaison in ethics?", "options": ["Officers should encourage positive relations with public officers", "Security should avoid public officers whenever possible", "Liaison means surrendering all authority", "Liaison is only for supervisors"], "answer": 0, "explanation": "Officers should encourage positive relations with public officers"}, {"id": 235, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::25", "year2025": true, "q": "Which best describes strive to learn?", "options": ["Professional competence requires continued learning", "Training ends after hiring", "Experience makes education unnecessary", "Only certifications matter, not growth"], "answer": 0, "explanation": "Professional competence requires continued learning"}, {"id": 236, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::26", "year2025": true, "q": "Which best describes develop rapport?", "options": ["Officers should help improve the image of the profession and respect peers", "Rapport means becoming socially involved with everyone", "Professional image is unimportant", "Rapport replaces rule enforcement"], "answer": 0, "explanation": "Officers should help improve the image of the profession and respect peers"}, {"id": 237, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::27", "year2025": true, "q": "Which best describes honesty in the code of ethics?", "options": ["Honest behavior is essential because officers occupy positions of trust", "Small dishonesty is acceptable if no loss occurs", "Trust matters only with managers", "Honesty is a public relations tool only"], "answer": 0, "explanation": "Honest behavior is essential because officers occupy positions of trust"}, {"id": 238, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::28", "year2025": true, "q": "Which best describes prejudice prohibition?", "options": ["All people must be treated with dignity and respect", "Restrictions may be based on personal beliefs", "Bias is acceptable if it feels preventive", "Equal treatment applies only to customers"], "answer": 0, "explanation": "All people must be treated with dignity and respect"}, {"id": 239, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::29", "year2025": true, "q": "Which best describes self-discipline?", "options": ["Officers must understand the gravity of their role and act diligently", "Discipline matters only when supervisors watch", "Self-discipline is mainly appearance", "It is the same as fear of punishment"], "answer": 0, "explanation": "Officers must understand the gravity of their role and act diligently"}, {"id": 240, "subject": "Fire, WHMIS, and First Aid", "concept": "Fire, WHMIS, and First Aid::30", "year2025": true, "q": "Which best describes deportment?", "options": ["Professional appearance and presentation affect trust and credibility", "Appearance has no link to professionalism", "Uniform matters only in court", "Deportment replaces competence"], "answer": 0, "explanation": "Professional appearance and presentation affect trust and credibility"}], "Leadership, Ethics, Customer Service, and Networking": [{"id": 241, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::1", "year2025": true, "q": "Which best describes protection officer as leader?", "options": ["Leadership in security grows from team-member skills and responsibility", "Leadership is only a title", "Leaders do not need ethics", "Leadership replaces procedures"], "answer": 0, "explanation": "Leadership in security grows from team-member skills and responsibility"}, {"id": 242, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::2", "year2025": true, "q": "Which best describes do you really want to be a leader?", "options": ["Leadership requires commitment, example, and accountability", "Leadership means fewer responsibilities", "Wanting authority is enough", "Leadership is mainly seniority"], "answer": 0, "explanation": "Leadership requires commitment, example, and accountability"}, {"id": 243, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::3", "year2025": true, "q": "Which best describes team member skills foundation?", "options": ["Strong leadership begins with good team-member skills", "Leaders no longer need frontline understanding", "Teamwork weakens command", "Leadership is separate from service"], "answer": 0, "explanation": "Strong leadership begins with good team-member skills"}, {"id": 244, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::4", "year2025": true, "q": "Which best describes expectations of leaders?", "options": ["Leaders are expected to model standards and guide others", "Leaders mainly enforce discipline without example", "Leaders do not need to communicate clearly", "Leaders are judged only by incident counts"], "answer": 0, "explanation": "Leaders are expected to model standards and guide others"}, {"id": 245, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::5", "year2025": true, "q": "Which best describes ten steps to effective leadership?", "options": ["Leadership can be developed through specific practices and habits", "Leadership cannot be learned", "There is only one correct leadership style for all settings", "Leaders should avoid change"], "answer": 0, "explanation": "Leadership can be developed through specific practices and habits"}, {"id": 246, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::6", "year2025": true, "q": "Which best describes leader as agent of change?", "options": ["Leaders help move organizations through improvement", "Leaders should resist all change", "Change belongs only to IT departments", "Leadership should preserve weak systems"], "answer": 0, "explanation": "Leaders help move organizations through improvement"}, {"id": 247, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::7", "year2025": true, "q": "Which option is correct about ethics and professionalism?", "options": ["A and B are correct: A. Standards of conduct matter. B. Unethical behavior harms the profession.", "A and C are correct: A. Standards of conduct matter. C. Ethics is optional if the site is busy.", "B and D are correct: B. Unethical behavior harms the profession. D. Professionalism is only appearance.", "None of the above"], "answer": 0, "explanation": "The ethics chapters stress conduct standards and the harm caused by unethical behavior."}, {"id": 248, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::8", "year2025": true, "q": "Which best describes ethics and professionalism?", "options": ["Protection work requires standards of conduct and professional values", "Ethics is optional if the site is busy", "Professionalism means only dress and posture", "Ethics matters only in investigations"], "answer": 0, "explanation": "Protection work requires standards of conduct and professional values"}, {"id": 249, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::9", "year2025": true, "q": "Which best describes standards of conduct?", "options": ["Behavior standards help guide professional action", "Standards are personal and need not be shared", "Conduct is irrelevant if incidents are low", "Only criminal law defines conduct"], "answer": 0, "explanation": "Behavior standards help guide professional action"}, {"id": 250, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::10", "year2025": true, "q": "Which best describes unethical behavior?", "options": ["Unethical conduct harms the profession and operations", "Unethical acts matter only if illegal", "Bad manners are the only unethical issue", "Ethics and performance are unrelated"], "answer": 0, "explanation": "Unethical conduct harms the profession and operations"}, {"id": 251, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::11", "year2025": true, "q": "Which best describes values and ethics?", "options": ["Values influence conduct and decisions in the profession", "Values are private and never affect work", "Ethics replaces policy", "Ethics is mainly customer service language"], "answer": 0, "explanation": "Values influence conduct and decisions in the profession"}, {"id": 252, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::12", "year2025": true, "q": "Which best describes public relations defined?", "options": ["How the organization and officers are perceived and related to by others", "A media-only activity", "A legal privilege", "A substitute for access control"], "answer": 0, "explanation": "How the organization and officers are perceived and related to by others"}, {"id": 253, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::13", "year2025": true, "q": "Which best describes public relations planning?", "options": ["Planning can improve public and stakeholder interactions", "Public relations should always be improvised", "Planning is unnecessary if the uniform looks good", "Public relations belongs only after crises"], "answer": 0, "explanation": "Planning can improve public and stakeholder interactions"}, {"id": 254, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::14", "year2025": true, "q": "Which best describes customer relations within the force?", "options": ["Internal service and respect affect overall performance", "Only external customers matter", "Coworker relations are unrelated to service", "Customer relations replaces enforcement"], "answer": 0, "explanation": "Internal service and respect affect overall performance"}, {"id": 255, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::15", "year2025": true, "q": "Which best describes handling customer complaints?", "options": ["Complaints should be handled professionally and constructively", "Complaints should be ignored unless written", "Every complaint is a discipline issue", "Complaints mainly belong to police"], "answer": 0, "explanation": "Complaints should be handled professionally and constructively"}, {"id": 256, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::16", "year2025": true, "q": "Which best describes service that makes the difference?", "options": ["Customer service can strongly affect outcomes and reputation", "Service has no security value", "Service should stop during normal operations", "Security service means saying yes to every request"], "answer": 0, "explanation": "Customer service can strongly affect outcomes and reputation"}, {"id": 257, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::17", "year2025": true, "q": "Which best describes media: good dream / bad dream?", "options": ["Media can help or hurt depending on how incidents are handled", "Media should always be given all details", "Media only matters in government sites", "Media has no impact on reputation"], "answer": 0, "explanation": "Media can help or hurt depending on how incidents are handled"}, {"id": 258, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::18", "year2025": true, "q": "Which best describes access control at a critical incident scene?", "options": ["Customer and public management still matters while controlling access", "All courtesy should stop during incidents", "Anyone may enter if they are upset", "Public relations replaces scene security"], "answer": 0, "explanation": "Customer and public management still matters while controlling access"}, {"id": 259, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::19", "year2025": true, "q": "Which best describes disruption of business?", "options": ["Security actions can affect continuity and should be managed thoughtfully", "Business disruption is irrelevant to security", "Continuity matters only to executives", "Security should ignore service impacts"], "answer": 0, "explanation": "Security actions can affect continuity and should be managed thoughtfully"}, {"id": 260, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::20", "year2025": true, "q": "Which best describes plant emergency organization control?", "options": ["Emergency organization and control require coordination", "Plants do not need emergency structures", "Only outside responders organize emergencies", "Control means locking every door"], "answer": 0, "explanation": "Emergency organization and control require coordination"}, {"id": 261, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::21", "year2025": true, "q": "Which best describes contract security contingent access control?", "options": ["Contract security may manage access under incident conditions", "Contract officers never handle access at incidents", "Contingent access means unrestricted access", "Access control is separate from public relations"], "answer": 0, "explanation": "Contract security may manage access under incident conditions"}, {"id": 262, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::22", "year2025": true, "q": "Which best describes networking importance?", "options": ["Professional relationships expand learning and effectiveness", "Networking is just socializing", "Networking weakens objectivity", "Only managers should network"], "answer": 0, "explanation": "Professional relationships expand learning and effectiveness"}, {"id": 263, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::23", "year2025": true, "q": "Which best describes professional organizations and training?", "options": ["Organizations and training support growth and standards", "Professional groups have no practical value", "Training can be replaced by networking", "Organizations matter only for executives"], "answer": 0, "explanation": "Organizations and training support growth and standards"}, {"id": 264, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::24", "year2025": true, "q": "Which best describes the liaison role?", "options": ["Building productive connections with other stakeholders or agencies", "A reason to bypass chain of command", "Equivalent to media relations only", "Limited to criminal investigations"], "answer": 0, "explanation": "Building productive connections with other stakeholders or agencies"}, {"id": 265, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::25", "year2025": true, "q": "Which best describes networking outcomes?", "options": ["Networking can improve knowledge, opportunity, and support", "Networking provides arrest authority", "Networking replaces competence", "Networking removes the need for ethics"], "answer": 0, "explanation": "Networking can improve knowledge, opportunity, and support"}, {"id": 266, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::26", "year2025": true, "q": "Which best describes code of ethics item: respond to employer's needs?", "options": ["The officer should respond to the employer's professional needs", "The officer should prioritize personal convenience", "The officer should ignore site procedures if confident", "The officer should respond only to public officers"], "answer": 0, "explanation": "The officer should respond to the employer's professional needs"}, {"id": 267, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::27", "year2025": true, "q": "Which best describes code of ethics item: maintain safe and secure workplace?", "options": ["Safety and security remain a foremost responsibility", "Only image matters first", "Security should wait for others to address safety", "Safe workplace concerns are mainly HR issues"], "answer": 0, "explanation": "Safety and security remain a foremost responsibility"}, {"id": 268, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::28", "year2025": true, "q": "Which best describes code of ethics item: enforce all lawful rules and regulations?", "options": ["Lawful rules should be enforced professionally", "All rules may be ignored during busy shifts", "Only criminal law counts as a rule", "Regulations matter only to supervisors"], "answer": 0, "explanation": "Lawful rules should be enforced professionally"}, {"id": 269, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::29", "year2025": true, "q": "Which best describes code of ethics item: encourage liaison with public officers?", "options": ["Positive relations with public officers are encouraged", "Public officers should be avoided to protect independence", "Liaison means surrendering site authority", "Only managers may speak with public officers"], "answer": 0, "explanation": "Positive relations with public officers are encouraged"}, {"id": 270, "subject": "Leadership, Ethics, Customer Service, and Networking", "concept": "Leadership, Ethics, Customer Service, and Networking::30", "year2025": true, "q": "Which best describes code of ethics item: encourage high standards of officer ethics?", "options": ["Officers should support ethical standards in the profession", "Ethics is a private matter only", "Standards weaken discretion", "Ethics is mainly for written exams"], "answer": 0, "explanation": "Officers should support ethical standards in the profession"}], "Traffic, Crowd, and Special Events": [{"id": 271, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::1", "year2025": true, "q": "Which best describes formation of crowds?", "options": ["Crowds form for different reasons and require understanding, not guesswork", "Crowds are automatically mobs", "Crowds eliminate the need for planning", "Crowd behavior never changes"], "answer": 0, "explanation": "Crowds form for different reasons and require understanding, not guesswork"}, {"id": 272, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::2", "year2025": true, "q": "Which best describes psychological factors in crowds?", "options": ["Behavior can be influenced by group dynamics and conditions", "Psychology has no relevance to crowd management", "Only barriers matter", "Crowds always act rationally as individuals"], "answer": 0, "explanation": "Behavior can be influenced by group dynamics and conditions"}, {"id": 273, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::3", "year2025": true, "q": "Which best describes types of crowds?", "options": ["Different crowd types may behave differently", "All crowds are the same once large enough", "Only violent crowds need planning", "Types matter only after incidents"], "answer": 0, "explanation": "Different crowd types may behave differently"}, {"id": 274, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::4", "year2025": true, "q": "Which best describes crowd actions and countermeasures?", "options": ["Different crowd behaviors call for different responses", "One tactic suits every crowd", "Countermeasures should begin with force", "Verbalization has little value"], "answer": 0, "explanation": "Different crowd behaviors call for different responses"}, {"id": 275, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::5", "year2025": true, "q": "Which best describes when verbalization doesn't work?", "options": ["Other measures may be needed when words fail, but judgment still matters", "Verbalization always works with enough volume", "If words fail, the event is over", "Only police may speak to crowds"], "answer": 0, "explanation": "Other measures may be needed when words fail, but judgment still matters"}, {"id": 276, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::6", "year2025": true, "q": "Which best describes security and demonstrations?", "options": ["Demonstrations require awareness of rights, safety, and security", "Demonstrations should always be treated as riots", "Security should provoke movement to clear areas", "Rights considerations are irrelevant"], "answer": 0, "explanation": "Demonstrations require awareness of rights, safety, and security"}, {"id": 277, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::7", "year2025": true, "q": "Which best describes formation of a mob?", "options": ["Crowd conditions can escalate into mob behavior", "A mob is the same as any gathering", "Mobs form only after arrests", "Mob behavior is predictable only by size"], "answer": 0, "explanation": "Crowd conditions can escalate into mob behavior"}, {"id": 278, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::8", "year2025": true, "q": "Which best describes responsibility and behavior of protective groups?", "options": ["Protective groups have duties and expected behaviors in crowd situations", "Protective groups replace planning", "Responsibility belongs only to event staff", "Behavior standards do not matter in disorder"], "answer": 0, "explanation": "Protective groups have duties and expected behaviors in crowd situations"}, {"id": 279, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::9", "year2025": true, "q": "Which best describes planning considerations for special events?", "options": ["Security planning should account for event-specific conditions", "One generic event plan is enough forever", "Planning may be skipped if attendance is low", "Only police need event plans"], "answer": 0, "explanation": "Security planning should account for event-specific conditions"}, {"id": 280, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::10", "year2025": true, "q": "Which best describes personal behavior at events?", "options": ["Officer demeanor affects safety, compliance, and perception", "Officer behavior matters only after complaints", "Professionalism may be relaxed at events", "Personal conduct is separate from crowd outcomes"], "answer": 0, "explanation": "Officer demeanor affects safety, compliance, and perception"}, {"id": 281, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::11", "year2025": true, "q": "Which best describes riot control force deployment procedures?", "options": ["Deployment requires procedure and control", "Any group of officers can improvise riot control", "Deployment planning is unnecessary if barriers exist", "Riot control is only about equipment"], "answer": 0, "explanation": "Deployment requires procedure and control"}, {"id": 282, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::12", "year2025": true, "q": "Which best describes crowd management assessment?", "options": ["Assessment supports better planning and decisions", "Assessment wastes time once a crowd exists", "Only ticket counts matter", "Assessment is only post-incident"], "answer": 0, "explanation": "Assessment supports better planning and decisions"}, {"id": 283, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::13", "year2025": true, "q": "Which best describes alcohol serving considerations?", "options": ["Alcohol can affect crowd behavior and risk", "Alcohol never changes event security needs", "Only servers need to think about alcohol risk", "Alcohol issues end after entry"], "answer": 0, "explanation": "Alcohol can affect crowd behavior and risk"}, {"id": 284, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::14", "year2025": true, "q": "Which best describes modern challenges in events?", "options": ["Special events face evolving challenges and require updated planning", "Event security has not changed in years", "Modern challenges are only cyber-related", "Challenges disappear with more fencing"], "answer": 0, "explanation": "Special events face evolving challenges and require updated planning"}, {"id": 285, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::15", "year2025": true, "q": "Which best describes traffic control signs and signals?", "options": ["Signs and signals are part of organized traffic control", "Signals remove the need for officers", "Signs are only legal issues", "Traffic direction is unrelated to safety"], "answer": 0, "explanation": "Signs and signals are part of organized traffic control"}, {"id": 286, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::16", "year2025": true, "q": "Which best describes roadway positions?", "options": ["Officer positioning matters in directing traffic safely", "Position is only a comfort issue", "Any position works if visible", "Roadway positioning matters only at night"], "answer": 0, "explanation": "Officer positioning matters in directing traffic safely"}, {"id": 287, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::17", "year2025": true, "q": "Which best describes hand signals in traffic control?", "options": ["Hand signals can guide drivers and pedestrians", "Hand signals are outdated and useless", "Only whistles matter", "Signals replace all signage"], "answer": 0, "explanation": "Hand signals can guide drivers and pedestrians"}, {"id": 288, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::18", "year2025": true, "q": "Which best describes the whistle in traffic control?", "options": ["A whistle supports attention and control when used properly", "Whistles grant authority", "A whistle replaces hand signals", "Whistles are for emergencies only"], "answer": 0, "explanation": "A whistle supports attention and control when used properly"}, {"id": 289, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::19", "year2025": true, "q": "Which best describes gate duty?", "options": ["Controlling vehicle or pedestrian entry at gates is a core access function", "Gate duty is only customer service", "Gates are unrelated to traffic control", "Gate duty removes the need for records"], "answer": 0, "explanation": "Controlling vehicle or pedestrian entry at gates is a core access function"}, {"id": 290, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::20", "year2025": true, "q": "Which best describes traffic calming?", "options": ["Security may support safer movement and slower flow where appropriate", "Traffic calming means blocking roads randomly", "Calming is unrelated to safety", "Only public works can affect traffic safety"], "answer": 0, "explanation": "Security may support safer movement and slower flow where appropriate"}, {"id": 291, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::21", "year2025": true, "q": "Which best describes general rules for traffic direction?", "options": ["Traffic direction requires clear, safe, and consistent actions", "Rules are optional if traffic is light", "Drivers should infer the officer's intent", "Traffic direction is a detention task"], "answer": 0, "explanation": "Traffic direction requires clear, safe, and consistent actions"}, {"id": 292, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::22", "year2025": true, "q": "Which option is correct for special-event access management?", "options": ["A and B are correct: A. Entry management must balance throughput and security. B. Credentials can regulate access to restricted areas.", "A and C are correct: A. Entry management must balance throughput and security. C. Screening should stop once lines form.", "B and D are correct: B. Credentials can regulate access. D. Perimeters only matter after incidents.", "None of the above"], "answer": 0, "explanation": "The special-event chapters emphasize balancing entry flow and security while using credentials appropriately."}, {"id": 293, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::23", "year2025": true, "q": "Which best describes special event entry management?", "options": ["Entry procedures must balance throughput, screening, and safety", "Fast entry always outranks security", "Screening should stop once lines form", "Entry management has no customer-service element"], "answer": 0, "explanation": "Entry procedures must balance throughput, screening, and safety"}, {"id": 294, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::24", "year2025": true, "q": "Which best describes credential checks at events?", "options": ["Credentials help regulate access to restricted areas", "Credentials are optional if staff are familiar", "Badges replace all escort needs", "Credentials matter only backstage"], "answer": 0, "explanation": "Credentials help regulate access to restricted areas"}, {"id": 295, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::25", "year2025": true, "q": "Which best describes perimeter at special events?", "options": ["Perimeter design helps channel movement and support layered control", "Perimeters only matter after incidents", "Perimeters replace internal planning", "A perimeter is only a fence"], "answer": 0, "explanation": "Perimeter design helps channel movement and support layered control"}, {"id": 296, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::26", "year2025": true, "q": "Which best describes soft target concerns at events?", "options": ["Event sites may be attractive targets and need layered planning", "Soft targets cannot be protected effectively", "Soft target thinking is only military", "Only venue owners need to consider it"], "answer": 0, "explanation": "Event sites may be attractive targets and need layered planning"}, {"id": 297, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::27", "year2025": true, "q": "Which best describes public-facing professionalism during events?", "options": ["High-visibility settings magnify the impact of officer conduct", "Professionalism matters less in crowds", "Events justify discourtesy", "Public perception has no operational value"], "answer": 0, "explanation": "High-visibility settings magnify the impact of officer conduct"}, {"id": 298, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::28", "year2025": true, "q": "Which best describes search considerations at events?", "options": ["Searches must be lawful, procedural, and suited to the setting", "Every attendee should be searched the same way regardless of policy", "Searches remove the need for observation", "Search procedures do not affect throughput"], "answer": 0, "explanation": "Searches must be lawful, procedural, and suited to the setting"}, {"id": 299, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::29", "year2025": true, "q": "Which best describes movement and egress planning?", "options": ["People must be able to move and leave safely under normal and emergency conditions", "Egress matters only during fire events", "Crowd density improves security", "Movement planning is a customer-service issue only"], "answer": 0, "explanation": "People must be able to move and leave safely under normal and emergency conditions"}, {"id": 300, "subject": "Traffic, Crowd, and Special Events", "concept": "Traffic, Crowd, and Special Events::30", "year2025": true, "q": "Which best describes event after-action review?", "options": ["Reviewing what happened improves future event planning", "Event learning is unnecessary once the event ends", "Only incidents require review", "After-action review belongs only to management"], "answer": 0, "explanation": "Reviewing what happened improves future event planning"}]};

  // CPO 10th Edition 2026 Practice Exam — 85-question reviewer bank
  const PRACTICE_2026 = [
    {
      "id": 1,
      "subject": "Chapter 1 – Role of the Professional Protection Officer",
      "section": "Chapter 1 – Role of the Professional Protection Officer",
      "chapter": "Chapter 1 – Role of the Professional Protection Officer",
      "concept": "CPO 10th Edition::Q1",
      "year2026": true,
      "q": "A professional is a person who:",
      "options": [
        "Accepts responsibility and embraces it, while consistently showing pride in performance.",
        "Joins security associations to form networks.",
        "Places the job above all other involvements.",
        "Both joining associations and placing the job above other involvements."
      ],
      "answer": 0,
      "explanation": "Professionalism is demonstrated by accountability and pride in one’s work. Joining associations is optional, and placing work above all other aspects of life is not a defining trait of professionalism."
    },
    {
      "id": 2,
      "subject": "Chapter 1 – Role of the Professional Protection Officer",
      "section": "Chapter 1 – Role of the Professional Protection Officer",
      "chapter": "Chapter 1 – Role of the Professional Protection Officer",
      "concept": "CPO 10th Edition::Q2",
      "year2026": true,
      "q": "The COMPETENCY BALANCE consists of these three items:",
      "options": [
        "Attitude, competency and pride",
        "Knowledge, skill and attitude",
        "Attitude, professional and skill",
        "Reputation, assets and skill"
      ],
      "answer": 1,
      "explanation": "The Competency Balance (KSA) is built on: - Knowledge – What you know. - Skill – What you can do. - Attitude – How you perform your duties."
    },
    {
      "id": 3,
      "subject": "Chapter 1 – Role of the Professional Protection Officer",
      "section": "Chapter 1 – Role of the Professional Protection Officer",
      "chapter": "Chapter 1 – Role of the Professional Protection Officer",
      "concept": "CPO 10th Edition::Q3",
      "year2026": true,
      "q": "A security supervisor is investigating suspicious activity. During the investigation, local police give a presentation to employees. This is an example of:",
      "options": [
        "Verification",
        "Prevention",
        "Mitigation",
        "Response"
      ],
      "answer": 2,
      "explanation": "The investigation itself is part of the response. The police presentation reduces future risk through awareness and education, making it mitigation."
    },
    {
      "id": 4,
      "subject": "Chapter 2 – The Security Officer of the 21st Century",
      "section": "Chapter 2 – The Security Officer of the 21st Century",
      "chapter": "Chapter 2 – The Security Officer of the 21st Century",
      "concept": "CPO 10th Edition::Q4",
      "year2026": true,
      "q": "Training standards, where they exist at all are:",
      "options": [
        "Inconsistent at best",
        "Issued by a State Standard",
        "Are best when company taught",
        "Have certified officers to great heights"
      ],
      "answer": 0,
      "explanation": "Security training requirements differ widely between jurisdictions. The industry does not have one universal standard."
    },
    {
      "id": 5,
      "subject": "Chapter 2 – The Security Officer of the 21st Century",
      "section": "Chapter 2 – The Security Officer of the 21st Century",
      "chapter": "Chapter 2 – The Security Officer of the 21st Century",
      "concept": "CPO 10th Edition::Q5",
      "year2026": true,
      "q": "Classroom training methods include all of the following, except:",
      "options": [
        "Lecture",
        "Demonstration",
        "Read and test",
        "Use of audiovisuals"
      ],
      "answer": 2,
      "explanation": "Lecture, demonstration, and audiovisuals are instructor-led classroom methods. “Read and test” is generally a self-study method rather than a classroom teaching technique."
    },
    {
      "id": 6,
      "subject": "Chapter 2 – The Security Officer of the 21st Century",
      "section": "Chapter 2 – The Security Officer of the 21st Century",
      "chapter": "Chapter 2 – The Security Officer of the 21st Century",
      "concept": "CPO 10th Edition::Q6",
      "year2026": true,
      "q": "What separates Professional Security Officers from others?",
      "options": [
        "The need to improve for financial betterment",
        "The want to excel over their peers",
        "The want to better perform job functions",
        "The ability to pass certification exams"
      ],
      "answer": 2,
      "explanation": "Professional officers are driven by continuous improvement and better performance, not by money, competition, or simply passing certification exams."
    },
    {
      "id": 7,
      "subject": "Chapter 3 – Risk Management",
      "section": "Chapter 3 – Risk Management",
      "chapter": "Chapter 3 – Risk Management",
      "concept": "CPO 10th Edition::Q7",
      "year2026": true,
      "q": "Which is NOT a common component of a Risk Program?",
      "options": [
        "Risk analysis",
        "Risk record",
        "Risk reporting",
        "Risk mitigation"
      ],
      "answer": 1,
      "explanation": "The core components of a risk program are Risk Analysis, Risk Reporting, and Risk Mitigation. “Risk record” may be documentation but is not a recognized core component."
    },
    {
      "id": 8,
      "subject": "Chapter 3 – Risk Management",
      "section": "Chapter 3 – Risk Management",
      "chapter": "Chapter 3 – Risk Management",
      "concept": "CPO 10th Edition::Q8",
      "year2026": true,
      "q": "A risk assessment is conducted using a checklist and may be part of the ______ process.",
      "options": [
        "Risk analysis",
        "Safety program",
        "Occurrence report",
        "Security survey"
      ],
      "answer": 3,
      "explanation": "Risk assessments are commonly performed during a security survey to identify vulnerabilities before incidents occur."
    },
    {
      "id": 9,
      "subject": "Chapter 3 – Risk Management",
      "section": "Chapter 3 – Risk Management",
      "chapter": "Chapter 3 – Risk Management",
      "concept": "CPO 10th Edition::Q9",
      "year2026": true,
      "q": "The ______ phase is where a review is done and a plan is formed to minimize identified risks.",
      "options": [
        "Reporting",
        "Recording",
        "Mitigation",
        "Survey"
      ],
      "answer": 2,
      "explanation": "Mitigation is the phase where measures are developed to reduce or eliminate identified risks."
    },
    {
      "id": 10,
      "subject": "Chapter 3 – Risk Management",
      "section": "Chapter 3 – Risk Management",
      "chapter": "Chapter 3 – Risk Management",
      "concept": "CPO 10th Edition::Q10",
      "year2026": true,
      "q": "When presenting a risk review:",
      "options": [
        "The report is fact and not negotiable",
        "There is always residual risk",
        "The report may go to insurers/underwriters",
        "Both B and C"
      ],
      "answer": 3,
      "explanation": "Residual risk always exists and risk reports may be reviewed by insurers, lawyers or underwriters."
    },
    {
      "id": 11,
      "subject": "Chapter 3 – Risk Management",
      "section": "Chapter 3 – Risk Management",
      "chapter": "Chapter 3 – Risk Management",
      "concept": "CPO 10th Edition::Q11",
      "year2026": true,
      "q": "The mitigation plan should include:",
      "options": [
        "Staffing recalculations",
        "Both C and D",
        "Educational elements",
        "Policy and procedure changes"
      ],
      "answer": 1,
      "explanation": "Training plus policy/procedure improvements are standard mitigation strategies."
    },
    {
      "id": 12,
      "subject": "Chapter 4 – Concepts and Evolution of Asset Protection",
      "section": "Chapter 4 – Concepts and Evolution of Asset Protection",
      "chapter": "Chapter 4 – Concepts and Evolution of Asset Protection",
      "concept": "CPO 10th Edition::Q12",
      "year2026": true,
      "q": "First modern state police department:",
      "options": [
        "Texas Rangers",
        "Massachusetts Troopers",
        "Pennsylvania State Police",
        "New York State Police"
      ],
      "answer": 2,
      "explanation": "Pennsylvania State Police (1905) is widely recognized as the first modern U.S. state police agency."
    },
    {
      "id": 13,
      "subject": "Chapter 4 – Concepts and Evolution of Asset Protection",
      "section": "Chapter 4 – Concepts and Evolution of Asset Protection",
      "chapter": "Chapter 4 – Concepts and Evolution of Asset Protection",
      "concept": "CPO 10th Edition::Q13",
      "year2026": true,
      "q": "The “Bible” of the security industry published in 1952:",
      "options": [
        "CPP",
        "Industrial Security Manual",
        "Report of the Security Task Force",
        "Hallcrest Report"
      ],
      "answer": 1,
      "explanation": "The Industrial Security Manual became the foundational reference for the private security industry."
    },
    {
      "id": 14,
      "subject": "Chapter 5 – Effective Communications",
      "section": "Chapter 5 – Effective Communications",
      "chapter": "Chapter 5 – Effective Communications",
      "concept": "CPO 10th Edition::Q14",
      "year2026": true,
      "q": "Effective communications simply are non-existent without:",
      "options": [
        "Proper equipment",
        "Ability to interpret",
        "Two-way mutual understanding",
        "Sending understandable information"
      ],
      "answer": 2,
      "explanation": "Communication is only effective when both sender and receiver share the same understanding."
    },
    {
      "id": 15,
      "subject": "Chapter 5 – Effective Communications",
      "section": "Chapter 5 – Effective Communications",
      "chapter": "Chapter 5 – Effective Communications",
      "concept": "CPO 10th Edition::Q15",
      "year2026": true,
      "q": "Which is NOT one of the six essentials of effective communication?",
      "options": [
        "Factual",
        "Concise",
        "Interpretable",
        "Timely"
      ],
      "answer": 2,
      "explanation": "Interpretable is not one of the recognized essentials in the CPO material."
    },
    {
      "id": 16,
      "subject": "Chapter 5 – Effective Communications",
      "section": "Chapter 5 – Effective Communications",
      "chapter": "Chapter 5 – Effective Communications",
      "concept": "CPO 10th Edition::Q16",
      "year2026": true,
      "q": "Effective communications do NOT exist when:",
      "options": [
        "Message not recorded",
        "Same frequency",
        "Ignoring each other",
        "Not on the same page"
      ],
      "answer": 3,
      "explanation": "Without shared understanding, communication has failed."
    },
    {
      "id": 17,
      "subject": "Chapter 6 – Physical Security Concepts",
      "section": "Chapter 6 – Physical Security Concepts",
      "chapter": "Chapter 6 – Physical Security Concepts",
      "concept": "CPO 10th Edition::Q17",
      "year2026": true,
      "q": "Risks are usually divided into three categories:",
      "options": [
        "People, Places, Things",
        "Property, Legal Liability, People",
        "Property, Actions, Things",
        "Objects, Physical Items, People"
      ],
      "answer": 1,
      "explanation": "CPO groups risks into Property, Legal Liability and People."
    },
    {
      "id": 18,
      "subject": "Chapter 6 – Physical Security Concepts",
      "section": "Chapter 6 – Physical Security Concepts",
      "chapter": "Chapter 6 – Physical Security Concepts",
      "concept": "CPO 10th Edition::Q18",
      "year2026": true,
      "q": "Example of a man-made disaster:",
      "options": [
        "Train derailment",
        "Earthquake",
        "Structure failure",
        "Terrorism"
      ],
      "answer": 3,
      "explanation": "Terrorism is an intentional human-caused event."
    },
    {
      "id": 19,
      "subject": "Chapter 6 – Physical Security Concepts",
      "section": "Chapter 6 – Physical Security Concepts",
      "chapter": "Chapter 6 – Physical Security Concepts",
      "concept": "CPO 10th Edition::Q19",
      "year2026": true,
      "q": "Two major roles of network video:",
      "options": [
        "Deter crime and prove guilt",
        "Witness an act in progress and aid investigation later",
        "Traffic control",
        "Deter crime and control traffic"
      ],
      "answer": 1,
      "explanation": "Network video supports live monitoring and later investigations."
    },
    {
      "id": 20,
      "subject": "Chapter 7 – Access Control",
      "section": "Chapter 7 – Access Control",
      "chapter": "Chapter 7 – Access Control",
      "concept": "CPO 10th Edition::Q20",
      "year2026": true,
      "q": "NOT part of an access control facility:",
      "options": [
        "Patrol identifying people",
        "Technical systems",
        "Record keeping",
        "All of the above"
      ],
      "answer": 0,
      "explanation": "Patrol is separate from access control operations."
    },
    {
      "id": 21,
      "subject": "Chapter 7 – Access Control",
      "section": "Chapter 7 – Access Control",
      "chapter": "Chapter 7 – Access Control",
      "concept": "CPO 10th Edition::Q21",
      "year2026": true,
      "q": "NOT part of secure key tracking:",
      "options": [
        "Issuing rings of keys to upper management",
        "Sign in/out",
        "Code each key",
        "Keep records confidential"
      ],
      "answer": 0,
      "explanation": "Keys should be issued only as needed under strict accountability."
    },
    {
      "id": 22,
      "subject": "Chapter 7 – Access Control",
      "section": "Chapter 7 – Access Control",
      "chapter": "Chapter 7 – Access Control",
      "concept": "CPO 10th Edition::Q22",
      "year2026": true,
      "q": "During access control it may be necessary to:",
      "options": [
        "Block access without credentials",
        "Leave post",
        "Allow entry without ID",
        "Revise post orders"
      ],
      "answer": 0,
      "explanation": "Access control exists to prevent unauthorized entry."
    },
    {
      "id": 23,
      "subject": "Chapter 7 – Access Control",
      "section": "Chapter 7 – Access Control",
      "chapter": "Chapter 7 – Access Control",
      "concept": "CPO 10th Edition::Q23",
      "year2026": true,
      "q": "Daily sign-out policy ensures master keys:",
      "options": [
        "Never have to leave the property",
        "Will not wear out",
        "Don’t need inventory",
        "Don’t require inventory"
      ],
      "answer": 0,
      "explanation": "Master keys remain controlled on site with accountability."
    },
    {
      "id": 24,
      "subject": "Chapter 8 – Contraband Detection Technology",
      "section": "Chapter 8 – Contraband Detection Technology",
      "chapter": "Chapter 8 – Contraband Detection Technology",
      "concept": "CPO 10th Edition::Q24",
      "year2026": true,
      "q": "Magnetometers are highly effective metal detection devices. Why?",
      "options": [
        "Just the sight of a magnetometer is a great deterrent",
        "It allows for a much higher rate of screening people",
        "It does not require any calibration",
        "It only detects non-ferrous metals"
      ],
      "answer": 1,
      "explanation": "Walk-through magnetometers quickly screen large numbers of people while maintaining effective detection capability. They are fast, efficient, and commonly used at airports, courthouses, and event entrances."
    },
    {
      "id": 25,
      "subject": "Crowd and Special Events",
      "section": "Crowd and Special Events",
      "chapter": "Crowd and Special Events",
      "concept": "CPO 10th Edition::Q25",
      "year2026": true,
      "q": "Which one of the following IS NOT a recommended technique for non-verbal movement of members of a non-responsive crowd member?",
      "options": [
        "Upper torso restraint",
        "Figure four hold",
        "Arm around waist escort hold",
        "Pressure point control"
      ],
      "answer": 3,
      "explanation": "Pressure point control is a pain-compliance technique, not a recommended crowd movement or escort technique. Crowd management emphasizes the least amount of force necessary."
    },
    {
      "id": 26,
      "subject": "Crowd and Special Events",
      "section": "Crowd and Special Events",
      "chapter": "Crowd and Special Events",
      "concept": "CPO 10th Edition::Q26",
      "year2026": true,
      "q": "Serving alcohol at special events can cause a multitude of problems. Security personnel should be trained in which of the following?",
      "options": [
        "Access control",
        "Intervention with intoxicated patrons",
        "Proper techniques for ejecting problem patrons",
        "All of the above"
      ],
      "answer": 3,
      "explanation": "Security personnel should be trained in access control, intervention with intoxicated patrons, and proper ejection procedures. All are essential responsibilities."
    },
    {
      "id": 27,
      "subject": "Traffic Control",
      "section": "Traffic Control",
      "chapter": "Traffic Control",
      "concept": "CPO 10th Edition::Q27",
      "year2026": true,
      "q": "The following IS NOT a function of the STOP sign:",
      "options": [
        "Clarify the subject of right-of-way at intersections",
        "Reduce vehicle accidents at intersections",
        "Allow numerous intersections to merge",
        "Regulate the flow of traffic"
      ],
      "answer": 2,
      "explanation": "STOP signs assign right-of-way, improve safety, and regulate traffic. They are not intended to merge numerous intersections."
    },
    {
      "id": 28,
      "subject": "Traffic Control",
      "section": "Traffic Control",
      "chapter": "Traffic Control",
      "concept": "CPO 10th Edition::Q28",
      "year2026": true,
      "q": "In order to effectively attract the driver’s attention to their hand signals, the traffic control officer should give ________ on the whistle.",
      "options": [
        "One long blast",
        "Two short blasts",
        "Three long blasts",
        "Four long blasts"
      ],
      "answer": 0,
      "explanation": "One long whistle blast is used to attract a driver’s attention before the traffic control officer gives hand signals."
    },
    {
      "id": 29,
      "subject": "Traffic Control",
      "section": "Traffic Control",
      "chapter": "Traffic Control",
      "concept": "CPO 10th Edition::Q29",
      "year2026": true,
      "q": "ROAD DIETS refer to:",
      "options": [
        "The reduction of travel lanes",
        "The narrowing of existing traffic lanes",
        "Reducing the thickness of the pavement",
        "The use of rotary intersections"
      ],
      "answer": 0,
      "explanation": "A road diet reduces the number of travel lanes to improve safety and traffic operations."
    },
    {
      "id": 30,
      "subject": "Unit III – Basic Investigation",
      "section": "Unit III – Basic Investigation",
      "chapter": "Unit III – Basic Investigation",
      "concept": "CPO 10th Edition::Q30",
      "year2026": true,
      "q": "One common mistake made by new investigators is to focus on the facts and forget:",
      "options": [
        "To verify the facts",
        "To confirm contact information",
        "To interview in a quiet room",
        "To record the interview"
      ],
      "answer": 0,
      "explanation": "Facts must always be verified through evidence and corroboration."
    },
    {
      "id": 31,
      "subject": "Unit III – Basic Investigation",
      "section": "Unit III – Basic Investigation",
      "chapter": "Unit III – Basic Investigation",
      "concept": "CPO 10th Edition::Q31",
      "year2026": true,
      "q": "An __________ is a systematic and thorough examination or inquiry into something or someone involving collection of facts and recording the examination in a report.",
      "options": [
        "Interview",
        "Informative",
        "Investigation",
        "Interrogation"
      ],
      "answer": 2,
      "explanation": "An investigation is the complete fact-finding and reporting process."
    },
    {
      "id": 32,
      "subject": "Unit III – Basic Investigation",
      "section": "Unit III – Basic Investigation",
      "chapter": "Unit III – Basic Investigation",
      "concept": "CPO 10th Edition::Q32",
      "year2026": true,
      "q": "“Please tell me what you saw when the incident occurred” is an example of:",
      "options": [
        "A closed-ended question",
        "A vague question",
        "A leading question",
        "An open-ended question"
      ],
      "answer": 3,
      "explanation": "Open-ended questions encourage detailed, unbiased responses."
    },
    {
      "id": 33,
      "subject": "Unit III – Basic Investigation",
      "section": "Unit III – Basic Investigation",
      "chapter": "Unit III – Basic Investigation",
      "concept": "CPO 10th Edition::Q33",
      "year2026": true,
      "q": "If an interviewee has confessed to a criminal act during your interview, it is best to:",
      "options": [
        "Confirm the identity of the person",
        "Maintain your professionalism and treat the person with respect",
        "Continue the interview, but call the police",
        "Discontinue the interview and do not allow the person to leave the room"
      ],
      "answer": 1,
      "explanation": "Stay calm, objective, and professional while following company procedures."
    },
    {
      "id": 34,
      "subject": "Chapter 13 – Crime and Incident Scene Procedures",
      "section": "Chapter 13 – Crime and Incident Scene Procedures",
      "chapter": "Chapter 13 – Crime and Incident Scene Procedures",
      "concept": "CPO 10th Edition::Q34",
      "year2026": true,
      "q": "Protecting the scene means the area must be preserved exactly as you found it. Evidence must not be disturbed. Which of the following should you NOT do?",
      "options": [
        "Remove a live victim from potential harm",
        "Use a fire extinguisher if needed",
        "Collect evidence for the case",
        "Allow temporary access to the site to evacuate bystanders because it is the only exit"
      ],
      "answer": 2,
      "explanation": "A Professional Protection Officer protects and preserves the crime scene but should not collect evidence. Evidence collection is performed by authorized investigators to preserve the chain of custody and prevent contamination."
    },
    {
      "id": 35,
      "subject": "Chapter 14 – Report Writing and Field Notes",
      "section": "Chapter 14 – Report Writing and Field Notes",
      "chapter": "Chapter 14 – Report Writing and Field Notes",
      "concept": "CPO 10th Edition::Q35",
      "year2026": true,
      "q": "The qualities which make a good report are known as the “Three C’s.” Which of the following is NOT one of the “Three C’s”?",
      "options": [
        "Conclusion",
        "Clear",
        "Concise",
        "Complete"
      ],
      "answer": 0,
      "explanation": "The Three C’s of report writing are Clear, Concise, and Complete. “Conclusion” is not one of the Three C’s."
    },
    {
      "id": 36,
      "subject": "Chapter 14 – Report Writing and Field Notes",
      "section": "Chapter 14 – Report Writing and Field Notes",
      "chapter": "Chapter 14 – Report Writing and Field Notes",
      "concept": "CPO 10th Edition::Q36",
      "year2026": true,
      "q": "One reason for reports is to record a permanent record of an incident. Another reason for reports is:",
      "options": [
        "Protect you from unreasonable prosecution",
        "Help you testify if the incident goes to court",
        "Justify the time you spent at an incident",
        "To prove your worth to the company"
      ],
      "answer": 1,
      "explanation": "Reports preserve an accurate record and refresh your memory if you must testify later."
    },
    {
      "id": 37,
      "subject": "Chapter 14 – Report Writing and Field Notes",
      "section": "Chapter 14 – Report Writing and Field Notes",
      "chapter": "Chapter 14 – Report Writing and Field Notes",
      "concept": "CPO 10th Edition::Q37",
      "year2026": true,
      "q": "A good rule to follow about reports is:",
      "options": [
        "Reports are written to justify a protection officer’s position",
        "If it is an uncommon event, then report it",
        "Write reports to document your hours",
        "Reports are useless if you did not witness the event"
      ],
      "answer": 1,
      "explanation": "Unusual or suspicious events should always be documented because they may become important later."
    },
    {
      "id": 38,
      "subject": "Chapter 15 – Legal Aspects of Security",
      "section": "Chapter 15 – Legal Aspects of Security",
      "chapter": "Chapter 15 – Legal Aspects of Security",
      "concept": "CPO 10th Edition::Q38",
      "year2026": true,
      "q": "We tend to think our laws are words written in books, with no organized history. In fact the source of our laws include, but are not limited to:",
      "options": [
        "The Civil Code of France",
        "Civil Law",
        "Sharia Law",
        "Both A and B"
      ],
      "answer": 3,
      "explanation": "The CPO material identifies both the Civil Code of France and the Civil Law tradition as historical legal sources."
    },
    {
      "id": 39,
      "subject": "Chapter 15 – Legal Aspects of Security",
      "section": "Chapter 15 – Legal Aspects of Security",
      "chapter": "Chapter 15 – Legal Aspects of Security",
      "concept": "CPO 10th Edition::Q39",
      "year2026": true,
      "q": "DEFAMATION is defined as:",
      "options": [
        "Writing a report that is incorrect and will cause you to lose your position",
        "Publishing a statement that is untrue and causes damage to another",
        "Making a statement to the press which is misquoted",
        "Speaking in a derogatory way about your employer"
      ],
      "answer": 1,
      "explanation": "Defamation is communicating a false statement that harms another person’s reputation."
    },
    {
      "id": 40,
      "subject": "Chapter 16 – Use of Force",
      "section": "Chapter 16 – Use of Force",
      "chapter": "Chapter 16 – Use of Force",
      "concept": "CPO 10th Edition::Q40",
      "year2026": true,
      "q": "All of the following questions must be answered in the affirmative to avoid the loss of a lawsuit except:",
      "options": [
        "Did the plaintiff have the ability to harm the officer or another person?",
        "Did the plaintiff show or manifest intent to carry through a threat against the officer or another person?",
        "Did the officer have the ability to retreat without injury to the officer or another person before use of force was applied?",
        "Was the officer impeded with no other option but to use force?"
      ],
      "answer": 2,
      "explanation": "Ability, intent, and necessity are the primary considerations. Retreat is the exception in this question."
    },
    {
      "id": 41,
      "subject": "Chapter 16 – Use of Force",
      "section": "Chapter 16 – Use of Force",
      "chapter": "Chapter 16 – Use of Force",
      "concept": "CPO 10th Edition::Q41",
      "year2026": true,
      "q": "Before using force, which of the following should be tried to avoid use of force?",
      "options": [
        "Run from the scene",
        "Threaten with a defensive weapon, not a firearm",
        "Discharge your firearm",
        "None of the above"
      ],
      "answer": 3,
      "explanation": "Proper de-escalation should be attempted before force. None of the listed options are correct de-escalation measures."
    },
    {
      "id": 42,
      "subject": "Stress and Disruptive Behavior",
      "section": "Stress and Disruptive Behavior",
      "chapter": "Stress and Disruptive Behavior",
      "concept": "CPO 10th Edition::Q42",
      "year2026": true,
      "q": "STRESS is often referred to as:",
      "options": [
        "The mental downfall",
        "The undetected source of hypertension",
        "The silent killer",
        "The root of mental illness"
      ],
      "answer": 2,
      "explanation": "Stress is commonly called the silent killer because chronic stress contributes to numerous physical and mental health conditions without obvious early symptoms."
    },
    {
      "id": 43,
      "subject": "Stress and Disruptive Behavior",
      "section": "Stress and Disruptive Behavior",
      "chapter": "Stress and Disruptive Behavior",
      "concept": "CPO 10th Edition::Q43",
      "year2026": true,
      "q": "Two of the five stage process to managing disruptive behavior are:",
      "options": [
        "Document and execute",
        "Document and evaluate",
        "Document and eliminate",
        "Document and evacuate"
      ],
      "answer": 1,
      "explanation": "Managing disruptive behavior requires evaluating the incident and documenting it."
    },
    {
      "id": 44,
      "subject": "Stress and Disruptive Behavior",
      "section": "Stress and Disruptive Behavior",
      "chapter": "Stress and Disruptive Behavior",
      "concept": "CPO 10th Edition::Q44",
      "year2026": true,
      "q": "When dealing with substance abuse problems, it is not possible to predict behavior patterns without having some indication of:",
      "options": [
        "Past mental history",
        "Family involvement with stress",
        "The substance(s) involved",
        "Home environment"
      ],
      "answer": 2,
      "explanation": "Different substances produce different behavioural effects."
    },
    {
      "id": 45,
      "subject": "Chapter 18 – Substance Abuse",
      "section": "Chapter 18 – Substance Abuse",
      "chapter": "Chapter 18 – Substance Abuse",
      "concept": "CPO 10th Edition::Q45",
      "year2026": true,
      "q": "Recent studies in the United States, performed by the National Institute on Drug Abuse, reveal that:",
      "options": [
        "75% of illicit drug users are employed",
        "24.6 million Americans use illicit drugs each month",
        "90% of alcoholics are employed",
        "All of the above"
      ],
      "answer": 3,
      "explanation": "All three statements are cited in the reviewer."
    },
    {
      "id": 46,
      "subject": "Chapter 18 – Substance Abuse",
      "section": "Chapter 18 – Substance Abuse",
      "chapter": "Chapter 18 – Substance Abuse",
      "concept": "CPO 10th Edition::Q46",
      "year2026": true,
      "q": "The protection officer IS NOT a diagnostician. If information of a possible substance abuse problem is brought to your attention:",
      "options": [
        "Observe the individual and submit your opinion to HR",
        "Bring this information to your supervisor or manager",
        "Write up a report and have it placed in the employee’s file",
        "Contact the company medical officer"
      ],
      "answer": 1,
      "explanation": "Report concerns through the chain of command."
    },
    {
      "id": 47,
      "subject": "Chapter 18 – Substance Abuse",
      "section": "Chapter 18 – Substance Abuse",
      "chapter": "Chapter 18 – Substance Abuse",
      "concept": "CPO 10th Edition::Q47",
      "year2026": true,
      "q": "There are various indications of substance abuse involvement. If you notice the presence of needles and a syringe:",
      "options": [
        "Report this to your supervisor",
        "Ignore it, as the person is probably a diabetic",
        "Check with medical department to verify if any supplies are missing",
        "Ask the person why they possess these items"
      ],
      "answer": 0,
      "explanation": "Observe and report; do not diagnose or investigate."
    },
    {
      "id": 48,
      "subject": "Chapter 18 – Substance Abuse",
      "section": "Chapter 18 – Substance Abuse",
      "chapter": "Chapter 18 – Substance Abuse",
      "concept": "CPO 10th Edition::Q48",
      "year2026": true,
      "q": "Which of the following are indications that a person is under the influence?",
      "options": [
        "Soft, slurred speech",
        "Drool from the mouth",
        "Rapid eye movement",
        "Both B and C"
      ],
      "answer": 0,
      "explanation": "Slurred speech is a classic sign of intoxication."
    },
    {
      "id": 49,
      "subject": "Chapter 18 – Substance Abuse",
      "section": "Chapter 18 – Substance Abuse",
      "chapter": "Chapter 18 – Substance Abuse",
      "concept": "CPO 10th Edition::Q49",
      "year2026": true,
      "q": "Which of the following are indications that a person is abusing inhalants?",
      "options": [
        "Overly alert to outside stimulus",
        "Thoughts of grandeur",
        "Poor muscle control",
        "Rapid eye movement"
      ],
      "answer": 2,
      "explanation": "Inhalants commonly impair coordination and muscle control."
    },
    {
      "id": 50,
      "subject": "Chapter 19 – Apprehension and Detention Procedures",
      "section": "Chapter 19 – Apprehension and Detention Procedures",
      "chapter": "Chapter 19 – Apprehension and Detention Procedures",
      "concept": "CPO 10th Edition::Q50",
      "year2026": true,
      "q": "“To deprive a person of his liberty by legal authority” is the BLACK’S LAW DICTIONARY definition of the term:",
      "options": [
        "Apprehension",
        "Detention",
        "Arrest",
        "None of the above"
      ],
      "answer": 2,
      "explanation": "This is Black’s Law Dictionary’s definition of arrest."
    },
    {
      "id": 51,
      "subject": "Chapter 19 – Apprehension and Detention Procedures",
      "section": "Chapter 19 – Apprehension and Detention Procedures",
      "chapter": "Chapter 19 – Apprehension and Detention Procedures",
      "concept": "CPO 10th Edition::Q51",
      "year2026": true,
      "q": "The Latin term “non solis” should be the first thing that comes to mind when you are making an arrest in the line of duty. This translates to:",
      "options": [
        "No limits, do what is necessary",
        "No pressure, consider what you are doing",
        "No hurry, think about it again",
        "Never alone, get some back-up to help"
      ],
      "answer": 3,
      "explanation": "Non Solis reminds officers to seek backup whenever possible."
    },
    {
      "id": 52,
      "subject": "Chapter 19 – Apprehension and Detention Procedures",
      "section": "Chapter 19 – Apprehension and Detention Procedures",
      "chapter": "Chapter 19 – Apprehension and Detention Procedures",
      "concept": "CPO 10th Edition::Q52",
      "year2026": true,
      "q": "When applying handcuffs to a subject who is being detained or arrested, ensure that the cuffs are secure, and as a final step:",
      "options": [
        "Tighten the cuffs one more click",
        "Make sure you can stick one finger under the cuffs",
        "Lock the cuffs",
        "Sit the subject down"
      ],
      "answer": 2,
      "explanation": "Double-locking prevents accidental tightening."
    },
    {
      "id": 53,
      "subject": "Chapter 20 – Patrol Principles",
      "section": "Chapter 20 – Patrol Principles",
      "chapter": "Chapter 20 – Patrol Principles",
      "concept": "CPO 10th Edition::Q53",
      "year2026": true,
      "q": "Whether utilizing technology or a security officer’s abilities, protective measures are built around the FOUR D’s OF SECURITY. They are:",
      "options": [
        "Deter, Detect, Delay, Deny",
        "Deter, Delay, Detain, Develop",
        "Delay, Deny, Display, Deprive",
        "Detect, Depress, Detain, Document"
      ],
      "answer": 0,
      "explanation": "These are the recognized Four D’s of Security."
    },
    {
      "id": 54,
      "subject": "Chapter 20 – Patrol Principles",
      "section": "Chapter 20 – Patrol Principles",
      "chapter": "Chapter 20 – Patrol Principles",
      "concept": "CPO 10th Edition::Q54",
      "year2026": true,
      "q": "The investigative process is supportive of the Four D’s… In the case of an employee falling down the stairs, a properly trained officer will:",
      "options": [
        "Examine the area around the fall",
        "Render first aid as needed",
        "Both A and B",
        "Contact the facility manager immediately"
      ],
      "answer": 2,
      "explanation": "Help the victim while preserving investigative awareness."
    },
    {
      "id": 55,
      "subject": "Chapter 20 – Patrol Principles",
      "section": "Chapter 20 – Patrol Principles",
      "chapter": "Chapter 20 – Patrol Principles",
      "concept": "CPO 10th Edition::Q55",
      "year2026": true,
      "q": "In reference to Code of Conduct Policy, some subjects that are usually included in the writing are:",
      "options": [
        "Sexual Harassment and Discrimination",
        "Ethical standards of conduct",
        "A and B",
        "A only"
      ],
      "answer": 2,
      "explanation": "Both are standard Code of Conduct topics."
    },
    {
      "id": 56,
      "subject": "Chapter 20 – Patrol Principles",
      "section": "Chapter 20 – Patrol Principles",
      "chapter": "Chapter 20 – Patrol Principles",
      "concept": "CPO 10th Edition::Q56",
      "year2026": true,
      "q": "In 2016 the ASIS Board of Directors determined that ERSM would be the driving force in the global ASIS International strategic plan. ERSM stands for:",
      "options": [
        "Enterprise Security Report Management",
        "Enterprise Security Risk Management",
        "Enterprise Safety Reality Management",
        "Enterprise Safety Risk Manual"
      ],
      "answer": 1,
      "explanation": "This is the official ASIS definition."
    },
    {
      "id": 57,
      "subject": "Security Awareness",
      "section": "Security Awareness",
      "chapter": "Security Awareness",
      "concept": "CPO 10th Edition::Q57",
      "year2026": true,
      "q": "Security Awareness is referred to when we speak of which of the following:",
      "options": [
        "The need to focus attention on security throughout the organization",
        "Keeping security as the focus and consciousness of every employee daily",
        "Instilling in the staff a sense of duty and awareness about security practices",
        "All of the following"
      ],
      "answer": 3,
      "explanation": "Security awareness includes all of these concepts—organization-wide attention, employee consciousness, and promoting good security practices."
    },
    {
      "id": 58,
      "subject": "Criminal Intelligence Analysis",
      "section": "Criminal Intelligence Analysis",
      "chapter": "Criminal Intelligence Analysis",
      "concept": "CPO 10th Edition::Q58",
      "year2026": true,
      "q": "There are several vendors offering automated solutions for criminal intelligence analysis. Which of the following is one of those vendors?",
      "options": [
        "IFMA",
        "I2 Incorporated",
        "ANACAPA",
        "3M & N Incorporated"
      ],
      "answer": 2,
      "explanation": "ANACAPA is identified in the CPO material as a provider of criminal intelligence analysis tools."
    },
    {
      "id": 59,
      "subject": "Alarms, Vulnerability and Card Access",
      "section": "Alarms, Vulnerability and Card Access",
      "chapter": "Alarms, Vulnerability and Card Access",
      "concept": "CPO 10th Edition::Q59",
      "year2026": true,
      "q": "Many nuisance alarms cause a waste of manpower. One rule about alarm response is:",
      "options": [
        "Quickly and silently is always best",
        "Call the police anytime you respond to an alarm",
        "Have your weapon at ready when responding to an alarm",
        "Never assume an alarm is false"
      ],
      "answer": 3,
      "explanation": "Every alarm must be treated as genuine until investigation proves otherwise."
    },
    {
      "id": 60,
      "subject": "Alarms, Vulnerability and Card Access",
      "section": "Alarms, Vulnerability and Card Access",
      "chapter": "Alarms, Vulnerability and Card Access",
      "concept": "CPO 10th Edition::Q60",
      "year2026": true,
      "q": "A vulnerability assessment ____________________ of the security and safety of a facility.",
      "options": [
        "Is an ongoing evaluation of conditions",
        "Is a once a year inventory",
        "Is performed when there is a violation",
        "Is a direct reflection"
      ],
      "answer": 0,
      "explanation": "A vulnerability assessment is a continuous process used to identify weaknesses before incidents occur."
    },
    {
      "id": 61,
      "subject": "Alarms, Vulnerability and Card Access",
      "section": "Alarms, Vulnerability and Card Access",
      "chapter": "Alarms, Vulnerability and Card Access",
      "concept": "CPO 10th Edition::Q61",
      "year2026": true,
      "q": "Alarm systems incorporate a wide variety of sensors. The basic purpose of a sensor is to do which of the following?",
      "options": [
        "Detect a physical change in the environment, interpret what event might be taking place and transmit that information back to a central processor in the dispatch office",
        "Detect a physical change and transmit it back to the police",
        "Detect a physical change and transmit it directly to the control officer",
        "All of the above"
      ],
      "answer": 0,
      "explanation": "Sensors send information to the alarm control panel/central processor, which determines the appropriate response."
    },
    {
      "id": 62,
      "subject": "Alarms, Vulnerability and Card Access",
      "section": "Alarms, Vulnerability and Card Access",
      "chapter": "Alarms, Vulnerability and Card Access",
      "concept": "CPO 10th Edition::Q62",
      "year2026": true,
      "q": "Intrusion sensors are set up to alert the dispatcher that an unauthorized person has breached security. All of the following intrusion sensors are commonly used except:",
      "options": [
        "Glass-break sensors",
        "Magnetic contact switches",
        "Duress alarms",
        "Auto-electromechanical RF sensors"
      ],
      "answer": 2,
      "explanation": "A duress alarm is manually activated by a person under threat. It is not an intrusion sensor."
    },
    {
      "id": 63,
      "subject": "Alarms, Vulnerability and Card Access",
      "section": "Alarms, Vulnerability and Card Access",
      "chapter": "Alarms, Vulnerability and Card Access",
      "concept": "CPO 10th Edition::Q63",
      "year2026": true,
      "q": "There are many reasons to go keyless and use card access. Which of the following is one of those reasons?",
      "options": [
        "Card access is more cost effective when many doors must be controlled",
        "Rekeying an entire facility after a lost key is impractical",
        "Card access identifies who enters sensitive areas",
        "All of the above"
      ],
      "answer": 3,
      "explanation": "Electronic access control reduces rekeying costs, improves accountability, and provides better control over access to sensitive areas."
    },
    {
      "id": 64,
      "subject": "Emergency Planning and Response",
      "section": "Emergency Planning and Response",
      "chapter": "Emergency Planning and Response",
      "concept": "CPO 10th Edition::Q64",
      "year2026": true,
      "q": "Even though all emergency events may not be of the same magnitude, they all share common threads. Which IS NOT a common thread in all emergency situations?",
      "options": [
        "An after-action review",
        "Emergency vehicles",
        "An impact on people",
        "A disruption to normal operations"
      ],
      "answer": 1,
      "explanation": "Not every emergency requires police, fire, or ambulance vehicles. However, every emergency affects people, disrupts normal operations, and should eventually include an after-action review."
    },
    {
      "id": 65,
      "subject": "Chapter 27 – Active Assailant Preparedness",
      "section": "Chapter 27 – Active Assailant Preparedness",
      "chapter": "Chapter 27 – Active Assailant Preparedness",
      "concept": "CPO 10th Edition::Q65",
      "year2026": true,
      "q": "A variety of reasons can trigger an individual to “lose it” and take violent action at work. One trigger event often encountered is:",
      "options": [
        "Financial difficulties",
        "Illness of a family member",
        "Loss of company benefits",
        "All of the above"
      ],
      "answer": 3,
      "explanation": "Financial problems, family crises, and employment-related losses are all recognized trigger events."
    },
    {
      "id": 66,
      "subject": "Chapter 27 – Active Assailant Preparedness",
      "section": "Chapter 27 – Active Assailant Preparedness",
      "chapter": "Chapter 27 – Active Assailant Preparedness",
      "concept": "CPO 10th Edition::Q66",
      "year2026": true,
      "q": "While no __________ plan can eliminate the risk of an active assailant incident, __________ is the safest and surest plan for stopping most from ever conducting an attack.",
      "options": [
        "Management – management",
        "Prevention – prevention",
        "Simulation – simulation",
        "Table-top – Table-top"
      ],
      "answer": 1,
      "explanation": "Prevention is the best strategy for stopping attacks before they occur."
    },
    {
      "id": 67,
      "subject": "Chapter 28 – Hazardous Materials",
      "section": "Chapter 28 – Hazardous Materials",
      "chapter": "Chapter 28 – Hazardous Materials",
      "concept": "CPO 10th Edition::Q67",
      "year2026": true,
      "q": "Any injured people should be treated by qualified first aid or medical personnel as soon as they are:",
      "options": [
        "Identified",
        "Flushed with a water solution",
        "Safely removed from the contaminated area",
        "Decontaminated in the spot where they are found"
      ],
      "answer": 2,
      "explanation": "Victims should first be removed from the hazardous area before treatment."
    },
    {
      "id": 68,
      "subject": "Chapter 29 – Bomb Threats",
      "section": "Chapter 29 – Bomb Threats",
      "chapter": "Chapter 29 – Bomb Threats",
      "concept": "CPO 10th Edition::Q68",
      "year2026": true,
      "q": "A bomber usually places a device to either injure or kill people, or to destroy a structure without causing death. Therefore, calling in a bomb threat:",
      "options": [
        "Must be timed very carefully",
        "Should be done from a non-traceable source",
        "Is counterproductive to either of these goals",
        "Will allow the terrorist to observe their work’s goals"
      ],
      "answer": 2,
      "explanation": "A warning often causes evacuation, reducing the attacker’s objectives."
    },
    {
      "id": 69,
      "subject": "Chapter 29 – Bomb Threats",
      "section": "Chapter 29 – Bomb Threats",
      "chapter": "Chapter 29 – Bomb Threats",
      "concept": "CPO 10th Edition::Q69",
      "year2026": true,
      "q": "If a bomb/IED is known to be inside of the facility:",
      "options": [
        "Evacuation should be reviewed",
        "Evacuation is the safest response",
        "Evacuate only after bomb squad neutralizes item",
        "Evacuate the area around the device"
      ],
      "answer": 3,
      "explanation": "Evacuate the immediate danger area while bomb technicians respond."
    },
    {
      "id": 70,
      "subject": "Chapter 30 – Fire Prevention, Detection and Response",
      "section": "Chapter 30 – Fire Prevention, Detection and Response",
      "chapter": "Chapter 30 – Fire Prevention, Detection and Response",
      "concept": "CPO 10th Edition::Q70",
      "year2026": true,
      "q": "One of the most common locations of a fire in the hospitality industry is the:",
      "options": [
        "Guest room",
        "Maintenance area",
        "Dining area",
        "Laundry area"
      ],
      "answer": 0,
      "explanation": "For the CPO exam, the target answer is the guest room. Guest rooms are treated as a common fire-origin area in hospitality because occupants may leave appliances unattended, overload outlets, or smoke carelessly."
    },
    {
      "id": 71,
      "subject": "Chapter 30 – Fire Prevention, Detection and Response",
      "section": "Chapter 30 – Fire Prevention, Detection and Response",
      "chapter": "Chapter 30 – Fire Prevention, Detection and Response",
      "concept": "CPO 10th Edition::Q71",
      "year2026": true,
      "q": "There are five basic classes of fires, each representing a different fuel. A Class K fire involves what type(s) of fuel?",
      "options": [
        "Wood, paper and cloth",
        "Oils and greases",
        "Electrical equipment",
        "Metals"
      ],
      "answer": 1,
      "explanation": "Class K fires involve cooking oils and greases."
    },
    {
      "id": 72,
      "subject": "Chapter 30 – Fire Prevention, Detection and Response",
      "section": "Chapter 30 – Fire Prevention, Detection and Response",
      "chapter": "Chapter 30 – Fire Prevention, Detection and Response",
      "concept": "CPO 10th Edition::Q72",
      "year2026": true,
      "q": "Foaming agents produce a layer of foam which blocks the oxygen supply to a fire. Foam agents are water based and should NOT be used on what class of fire?",
      "options": [
        "A",
        "B",
        "C",
        "K"
      ],
      "answer": 2,
      "explanation": "Water-based foam should not be used on energized electrical fires."
    },
    {
      "id": 73,
      "subject": "Chapter 30 – Fire Prevention, Detection and Response",
      "section": "Chapter 30 – Fire Prevention, Detection and Response",
      "chapter": "Chapter 30 – Fire Prevention, Detection and Response",
      "concept": "CPO 10th Edition::Q73",
      "year2026": true,
      "q": "Halogenated extinguisher units are referred to as a CLEAN AGENT. Why are they ideal on electronics?",
      "options": [
        "They cool and smother the fire",
        "They leave no residue",
        "They are good on Class A, B and C fires",
        "All of the above"
      ],
      "answer": 3,
      "explanation": "They leave no residue and are suitable for Class A, B and C fires."
    },
    {
      "id": 74,
      "subject": "Labor Relations",
      "section": "Labor Relations",
      "chapter": "Labor Relations",
      "concept": "CPO 10th Edition::Q74",
      "year2026": true,
      "q": "There are specific rights for bargaining members which MUST be observed. These rights are referred to as:",
      "options": [
        "Weingarten rights",
        "Bargaining rights",
        "Labor rights",
        "Striking rights"
      ],
      "answer": 0,
      "explanation": "Weingarten Rights protect union employees by allowing them union representation during interviews that could lead to discipline."
    },
    {
      "id": 75,
      "subject": "Leadership",
      "section": "Leadership",
      "chapter": "Leadership",
      "concept": "CPO 10th Edition::Q75",
      "year2026": true,
      "q": "Anyone who influences the willing actions of others in support of organizational goals and processes is considered:",
      "options": [
        "A Supervisor",
        "A Manager",
        "A Trainer",
        "A Leader"
      ],
      "answer": 3,
      "explanation": "Leadership is the ability to influence people toward achieving organizational goals."
    },
    {
      "id": 76,
      "subject": "Leadership",
      "section": "Leadership",
      "chapter": "Leadership",
      "concept": "CPO 10th Edition::Q76",
      "year2026": true,
      "q": "What are some attributes of a good leader?",
      "options": [
        "Sloth and influence",
        "Confidence and trustworthiness",
        "Motivation to lead and accountability",
        "Both B and C"
      ],
      "answer": 3,
      "explanation": "Effective leaders are confident, trustworthy, motivated, and accountable."
    },
    {
      "id": 77,
      "subject": "Leadership",
      "section": "Leadership",
      "chapter": "Leadership",
      "concept": "CPO 10th Edition::Q77",
      "year2026": true,
      "q": "In the books penned by Johnson (2005), Sennewald & Braiilie (2015) and Watson (2007), all of these well reputed security professionals agree that some of the most effective leaders are sometimes the:",
      "options": [
        "Ones you least expect",
        "Most reluctant",
        "Anchors of the class",
        "Failures of the future"
      ],
      "answer": 1,
      "explanation": "Reluctant leaders often lead out of duty rather than ego and are frequently highly effective."
    },
    {
      "id": 78,
      "subject": "Ethics",
      "section": "Ethics",
      "chapter": "Ethics",
      "concept": "CPO 10th Edition::Q78",
      "year2026": true,
      "q": "The International Foundation for Protection Officer Code of Ethics (IFPO, 2010) provides for the basis of decision-making and actions of the professional protection officer. One of the primary requirements is LOYALTY. Loyalty to whom?",
      "options": [
        "The Employer",
        "The Client",
        "The Public",
        "All of the above"
      ],
      "answer": 0,
      "explanation": "The primary loyalty requirement is to respond to the employer’s professional needs. Although a protection officer also has responsibilities to the client and the public, the correct answer to this question is the employer."
    },
    {
      "id": 79,
      "subject": "Public Relations and Customer Service",
      "section": "Public Relations and Customer Service",
      "chapter": "Public Relations and Customer Service",
      "concept": "CPO 10th Edition::Q79",
      "year2026": true,
      "q": "An officer’s deportment must be crisp, sharp, clean and polished. In this usage a simple definition of DEPORTMENT is:",
      "options": [
        "Uniform",
        "Language",
        "Report writing",
        "None of the above"
      ],
      "answer": 0,
      "explanation": "Here, deportment refers to one’s professional appearance and presentation."
    },
    {
      "id": 80,
      "subject": "Public Relations and Customer Service",
      "section": "Public Relations and Customer Service",
      "chapter": "Public Relations and Customer Service",
      "concept": "CPO 10th Edition::Q80",
      "year2026": true,
      "q": "It is not good enough for the security officer to just know their products and services. A truly successful security officer also knows the services and products of most other departments as well. Thus, the successful public-relations-minded security officer will spend many hours studying which of the following?",
      "options": [
        "Identifying locations of stairs, elevators, escalators, restrooms and food services",
        "The inner working of the organization they are assigned to protect",
        "Maps of the facility",
        "All of the above"
      ],
      "answer": 3,
      "explanation": "Good public relations require complete knowledge of the organization and facility."
    },
    {
      "id": 81,
      "subject": "Public Relations and Customer Service",
      "section": "Public Relations and Customer Service",
      "chapter": "Public Relations and Customer Service",
      "concept": "CPO 10th Edition::Q81",
      "year2026": true,
      "q": "When you can help someone, seize the opportunity and do which of the following?",
      "options": [
        "Approach someone who looks lost before they come to you",
        "Escort the person instead of just giving directions",
        "Make the call for them instead of just pointing to the phone",
        "All of the above"
      ],
      "answer": 3,
      "explanation": "Outstanding customer service means proactively helping people."
    },
    {
      "id": 82,
      "subject": "Liaison, Information and Security Networking",
      "section": "Liaison, Information and Security Networking",
      "chapter": "Liaison, Information and Security Networking",
      "concept": "CPO 10th Edition::Q82",
      "year2026": true,
      "q": "A security professional may be designated as a “liaison” to a group or department outside of the organization. What would be the function of this liaison security person?",
      "options": [
        "Report detrimental information",
        "Be a point of contact between both groups",
        "Ensure rules of order",
        "Coordinate emergency crisis management problems"
      ],
      "answer": 1,
      "explanation": "A liaison’s primary role is communication and coordination between organizations."
    },
    {
      "id": 83,
      "subject": "Liaison, Information and Security Networking",
      "section": "Liaison, Information and Security Networking",
      "chapter": "Liaison, Information and Security Networking",
      "concept": "CPO 10th Edition::Q83",
      "year2026": true,
      "q": "Information is:",
      "options": [
        "Obtained in school",
        "Knowledge",
        "Power",
        "Useless until reviewed"
      ],
      "answer": 1,
      "explanation": "In the CPO material, information is defined as knowledge. Therefore, the correct answer is B. Knowledge."
    },
    {
      "id": 84,
      "subject": "Liaison, Information and Security Networking",
      "section": "Liaison, Information and Security Networking",
      "chapter": "Liaison, Information and Security Networking",
      "concept": "CPO 10th Edition::Q84",
      "year2026": true,
      "q": "The NYPD SHIELD program is designed to share information and cooperation between:",
      "options": [
        "The New York City Police Department and the Department of Homeland Security",
        "The private security sector and contract security sector",
        "The New York City Police Department and the security community",
        "The Department of Homeland Security and the New York City security community"
      ],
      "answer": 2,
      "explanation": "NYPD SHIELD is a partnership between the NYPD and the public/private security community."
    },
    {
      "id": 85,
      "subject": "Liaison, Information and Security Networking",
      "section": "Liaison, Information and Security Networking",
      "chapter": "Liaison, Information and Security Networking",
      "concept": "CPO 10th Edition::Q85",
      "year2026": true,
      "q": "These cooperation programs are international. In __________, for example, the Security Industry Authority (SIA) is involved with regulating individuals and contractors, as well as providing security training.",
      "options": [
        "Ireland",
        "Australia",
        "United Kingdom",
        "Norway"
      ],
      "answer": 2,
      "explanation": "The SIA is the statutory regulator for the private security industry in the United Kingdom."
    }
  ];


  function shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i],a[j]] = [a[j],a[i]];
    }
    return a;
  }

  function shuffleQuestionOptions(question){
    const indexed = question.options.map((text, idx)=>({text, idx}));
    const shuffled = shuffle(indexed);
    return {
      ...question,
      options: shuffled.map(x=>x.text),
      answer: shuffled.findIndex(x=>x.idx === question.answer)
    };
  }


  function get2026PracticeQuestions(){
    // Keep the 2026 reviewer choices in their original order.
    // Several source questions use choices such as “Both B and C” or
    // “All of the above,” so shuffling those choices changes their meaning.
    return deepClone(PRACTICE_2026).map(function(question){
      if(String(question.chapter || "").trim().toLowerCase() === String(question.section || "").trim().toLowerCase()){
        question.chapter = "";
      }
      return question;
    });
  }

  function build2026PracticeExam(){
    return get2026PracticeQuestions();
  }

  function build2026PracticeBlocks(){
    const questions = get2026PracticeQuestions();
    const blocks = [];
    let current = null;

    for(const question of questions){
      const subject = question.section || question.subject || "CPO 10th Edition";
      if(!current || current.subject !== subject){
        current = {subject, questions:[]};
        blocks.push(current);
      }
      current.questions.push({...question});
    }

    return blocks;
  }

  function get2026PracticeBank(){
    return deepClone(PRACTICE_2026);
  }

  function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
  }

  function getAllQuestions(){
    return SUBJECTS.flatMap(subject => BANK[subject].map(q => ({...q})));
  }

  function getSubjectPool(subject, usedConcepts){
    return BANK[subject]
      .filter(q => !usedConcepts.has(q.concept))
      .map(q => ({...q}));
  }

  function pickUniqueQuestions(subject, count, usedConcepts){
    const pool = shuffle(getSubjectPool(subject, usedConcepts));
    const picked = [];
    for(const q of pool){
      if(picked.length >= count) break;
      if(usedConcepts.has(q.concept)) continue;
      usedConcepts.add(q.concept);
      picked.push(shuffleQuestionOptions(q));
    }
    return picked;
  }

  function buildQuizBlocks(totalQuestions){
    const subjectsNeeded = totalQuestions === 10 ? 1 : 2;
    const chosenSubjects = shuffle(SUBJECTS).slice(0, subjectsNeeded);
    const usedConcepts = new Set();
    const blocks = [];
    let remaining = totalQuestions;

    for(const subject of chosenSubjects){
      const blockSize = totalQuestions === 10 ? 10 : 10;
      const qs = pickUniqueQuestions(subject, Math.min(blockSize, remaining), usedConcepts);
      if(qs.length){
        blocks.push({subject, questions: qs});
        remaining -= qs.length;
      }
    }

    while(remaining > 0){
      const moreSubjects = shuffle(SUBJECTS.filter(s => !chosenSubjects.includes(s)));
      let added = false;
      for(const subject of moreSubjects){
        const qs = pickUniqueQuestions(subject, remaining, usedConcepts);
        if(qs.length){
          blocks.push({subject, questions: qs});
          remaining -= qs.length;
          added = true;
          break;
        }
      }
      if(!added) break;
    }

    return blocks;
  }

  function buildFullBlocks(target = 300){
    const usedConcepts = new Set();
    const blocks = [];
    let total = 0;
    let lastSubject = null;
    let safety = 0;

    while(total < target && safety < 2000){
      safety++;
      let candidates = shuffle(SUBJECTS.filter(s => s !== lastSubject));
      let built = false;

      for(const subject of candidates){
        const available = getSubjectPool(subject, usedConcepts).length;
        if(!available) continue;

        const desired = Math.min(10, available, target - total);
        const qs = pickUniqueQuestions(subject, desired, usedConcepts);
        if(qs.length){
          blocks.push({subject, questions: qs});
          total += qs.length;
          lastSubject = subject;
          built = true;
          break;
        }
      }

      if(!built) break;
    }

    return blocks;
  }

  function flattenBlocks(blocks){
    return blocks.flatMap(block => block.questions.map(q => ({...q, section:block.subject})));
  }

  function getReviewer(){
    return deepClone(REVIEWER);
  }

  function getBank(){
    return deepClone(BANK);
  }

  window.CPO2025 = {
    PRACTICE_2026_VERSION: "2026-q1-q85-corrected-v3",
    SUBJECTS,
    REVIEWER,
    BANK,
    PRACTICE_2026,
    getBank,
    getReviewer,
    getAllQuestions,
    get2026PracticeBank,
    get2026PracticeQuestions,
    build2026PracticeExam,
    build2026PracticeBlocks,
    buildQuizBlocks,
    buildFullBlocks,
    flattenBlocks,
    shuffleQuestionOptions
  };
})();
