
export interface PageContent {
  title: string;
  description: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}

export const BRAND_CONTENT: Record<string, PageContent> = {
  'Hikvision': {
    title: 'Hikvision CCTV Camera Installation & Support',
    description: `Hikvision is a top global security brand. They are known for reliable CCTV technology. CamHarbor offers expert Hikvision installation and services in Delhi NCR. We handle everything from setup to maintenance.
    
Hikvision cameras have great features. ColorVu gives you color video at night. AcuSense uses smart tech to spot humans and cars. This stops false alarms. Whether you need 4 cameras or 64, Hikvision has a solution for you.

Our team installs your cameras carefully. We hide wires and cover blind spots. We also set up the Hik-Connect app for you. This lets you watch your video on your phone from anywhere. Using an expert ensures your warranty stays valid.`,
    features: [
      'ColorVu Technology for 24/7 colorful imaging',
      'AcuSense for smart human/vehicle detection',
      'High-resolution IP and Turbo HD solutions',
      'Hik-Connect app for seamless remote viewing',
      'Wide dynamic range (WDR) for challenging light'
    ],
    faqs: [
      { question: 'Why choose Hikvision over other brands?', answer: 'Hikvision offers the best balance of price, performance, and advanced analytics like ColorVu and AcuSense.' },
      { question: 'Can I view Hikvision cameras on my phone?', answer: 'Yes, the Hik-Connect app provides secure remote access on both iOS and Android devices.' },
      { question: 'What is the warranty period?', answer: 'Hikvision products typically come with a 2-3 year manufacturer warranty when purchased from authorized dealers.' }
    ]
  },
  'CP Plus': {
    title: 'CP Plus CCTV Surveillance Systems',
    description: `CP Plus is a favorite brand in India. They make strong and affordable security systems. CamHarbor provides full CP Plus installation services. We make sure your home or office is safe with this trusted brand.

CP Plus has cameras for everyone. Their EzyKam series is great for homes. These are WiFi cameras with two-way talk. For offices, the Orange series is very durable. They give clear images and last a long time.

We install CP Plus systems properly. We protect the cables and power supply. This stops common errors. We also teach you how to use the mobile app. You can easily watch old videos or take snapshots on your phone.`,
    features: [
      'Cost-effective solutions for homes and SMEs',
      'EzyKam series for wireless smart home security',
      'gCMOB mobile app for easy remote monitoring',
      'Wide service network and easy spare part availability',
      'InstaCloud support for easy online configuration'
    ],
    faqs: [
      { question: 'Is CP Plus an Indian brand?', answer: 'Yes, CP Plus is a leading Indian security brand with products designed for local needs.' },
      { question: 'Do CP Plus cameras have audio?', answer: 'Yes, many models come with built-in microphones for audio recording.' },
      { question: 'Which app does CP Plus use?', answer: 'CP Plus uses gCMOB (Android) and iCMOB (iOS) for remote viewing.' }
    ]
  },
  'Dahua': {
    title: 'Dahua Technology Installation Services',
    description: `Dahua Technology is a video security leader. They invented HDCVI, which makes analog video very clear. CamHarbor installs the best Dahua products for you. We offer everything from simple cameras to smart AI systems.

Dahua cameras see well in the dark. Their Starlight tech keeps images bright at night. Their TiOC cameras are very special. They have color video, alarm lights, and sirens built-in. This scares away intruders before they break in.

We are experts at setting up Dahua smart features. We can set alarms for line crossing or face detection. This makes your system proactive. We also link it to the DMSS phone app. You get instant alerts if something happens.`,
    features: [
      'TiOC active deterrence with light and siren',
      'Starlight technology for superior night vision',
      'HDCVI technology for long-distance HD transmission',
      'WizSense AI for focus on humans and vehicles',
      'DMSS app for real-time alerts and control'
    ],
    faqs: [
      { question: 'What is Dahua TiOC?', answer: 'TiOC stands for Three-in-One Camera, combining 24/7 full color, active deterrence (siren/light), and AI.' },
      { question: 'Does Dahua work with old cables?', answer: 'Yes, Dahua HDCVI technology allows HD video over standard coaxial cables.' },
      { question: 'How is the night vision?', answer: 'Dahua Starlight technology provides excellent color images even in very low light conditions.' }
    ]
  },
  'Honeywell': {
    title: 'Honeywell Security & Surveillance',
    description: `Honeywell is a big name in technology. They set the standard for top-quality security. Their cameras are perfect for offices and banks. CamHarbor installs Honeywell cameras that last for years.

Honeywell systems are very tough. They are waterproof and dustproof. This makes them great for outdoors. Their recorders can handle lots of data. This is key for banks that need to keep video for months.

Our team knows how to handle these pro systems. We do neat cabling and secure setup. We can also link them to other building systems. We ensure you get the best performance from your Honeywell hardware.`,
    features: [
      'Enterprise-grade reliability and build quality',
      'High IP ratings for extreme weather conditions',
      'Seamless integration with building management systems',
      'Impact series for cost-effective commercial use',
      'Long-term storage and compliance support'
    ],
    faqs: [
      { question: 'Is Honeywell good for home use?', answer: 'Yes, their Impact series offers professional-grade security at competitive prices for homes.' },
      { question: 'Does it support cloud recording?', answer: 'Honeywell systems can be integrated with cloud backup solutions for added data safety.' },
      { question: 'Where is Honeywell commonly used?', answer: 'You will often see them in malls, airports, banks, and high-end corporate offices.' }
    ]
  },
  'Bosch': {
    title: 'Bosch Intelligent Video Security',
    description: `Bosch makes high-end German security products. Their cameras are smart computers. They can spot trouble on their own. CamHarbor installs Bosch systems for clients who want the best detail.

Bosch cameras are famous for built-in analytics. They detect things like loitering instantly. They don't need a big server to do this. Their rugged cameras can survive extreme weather. This is perfect for factories and large sites.

Installing Bosch needs skill. Our team can set up the smart rules you need. We make sure every alert matters. We ensure the video is clear enough to read license plates and faces.`,
    features: [
      'Edge Video Analytics for real-time intelligence',
      'Bandwidth reduction for efficient storage',
      'MIC IP starlight cameras for rugged environments',
      'Superior dynamic range for varying light',
      'German engineering for long-term durability'
    ],
    faqs: [
      { question: 'Why are Bosch cameras expensive?', answer: 'They offer unparalleled analytics, build quality, and image processing capabilities suited for critical security.' },
      { question: 'Do they need a special server?', answer: 'No, Bosch cameras process analytics on the edge (inside the camera), reducing server load.' },
      { question: 'Is it suitable for homes?', answer: 'While primarily commercial, high-end estates often use Bosch for perimeter security.' }
    ]
  },
  'Panasonic': {
    title: 'Panasonic i-PRO Sensing Solutions',
    description: `Panasonic, now i-PRO, is known for clear video quality. Their cameras capture true colors. This is vital for evidence. CamHarbor installs Panasonic cameras for shops and offices.

These cameras are very smart. They adjust to light changes automatically. If a door opens, the face is still clear. This is great for lobbies. They also save space by compressing video well.

We recommend Panasonic for critical spots. This includes bank counters and school entries. We focus the lens perfectly during setup. We also turn on security features to stop hackers.`,
    features: [
      'Intelligent Auto (iA) for dynamic scene adjustment',
      'Face Super Dynamic for clear facial capture',
      'Smart Coding to reduce bandwidth by up to 75%',
      'Secure communication features',
      'High durability with clear visibility coating'
    ],
    faqs: [
      { question: 'What is i-PRO?', answer: 'i-PRO is the new brand name for Panasonic’s professional security solutions.' },
      { question: 'Does it work in rain?', answer: 'Yes, many models feature a special coating that prevents water droplets from obscuring the lens.' },
      { question: 'How is the low light performance?', answer: 'Panasonic sensors are highly sensitive, delivering clear color images even in moonlight.' }
    ]
  },
  'Godrej': {
    title: 'Godrej Security Solutions',
    description: `Godrej is a trusted name in India. They make security products for local needs. CamHarbor installs Godrej CCTV systems. We help bring safety to your home and business.

Godrej offers a full security family. They have cameras, alarms, and video door phones. Their "See Thru" cameras are very clear and affordable. Service is also easy to find across the country.

Our installation is friendly and neat. We help you pick the right cameras. We can link your CCTV with your door phone. We also show you how to use the app. It is simple and easy for families.`,
    features: [
      'Trusted Indian brand with vast service network',
      'Comprehensive home security ecosystem',
      'See Thru range for HD clarity',
      'Easy integration with Video Door Phones',
      'User-friendly interface for families'
    ],
    faqs: [
      { question: 'Is service easy to get?', answer: 'Yes, Godrej has one of the widest service networks in India.' },
      { question: 'Can I connect it to my TV?', answer: 'Yes, the DVR/NVR facilitates HDMI output to view feeds on your television.' },
      { question: 'Do they make WiFi cameras?', answer: 'Yes, Godrej EVE series provides smart WiFi pan-tilt cameras for indoors.' }
    ]
  },
  'Samsung': {
    title: 'Samsung (Hanwha Vision) Security',
    description: `Samsung Security is now Hanwha Vision. They make advanced and secure cameras. They are used in big projects and government sites. CamHarbor installs these high-tech systems for you.

Hanwha cameras have powerful chips. They give clear video even in fog or bad light. They are also very safe from hackers. This makes them trusted by big companies.

We install these systems with care. We can set up special views for long corridors. We configure the recorders for reliability. We ensure your video is safe and always recording.`,
    features: [
      'Wisenet chipsets for superior image processing',
      'Cybersecurity assurance best-in-class',
      'Hallway View for vertical corridor monitoring',
      'Defog and Digital Image Stabilization',
      'Advanced analytics included in diverse ranges'
    ],
    faqs: [
      { question: 'Is Samsung CCTV different from Hanwha?', answer: 'Samsung Techwin was acquired by Hanwha; the brand is now Hanwha Vision but widely known as Samsung CCTV.' },
      { question: 'Are they secure from hackers?', answer: 'Hanwha places extreme emphasis on cybersecurity, making them very secure.' },
      { question: 'What is Hallway View?', answer: 'It rotates the camera sensor to 9:16 capability, perfect for long, narrow corridors.' }
    ]
  },
  'Sony': {
    title: 'Sony Video Security',
    description: `Sony makes the best image sensors. Their cameras capture amazing detail and color. CamHarbor installs Sony cameras for places that need perfect quality.

Sony cameras work great in high contrast. If a room has bright windows and dark corners, everything still looks clear. Their night vision is also excellent. You see natural colors even in the dark.

We suggest Sony for high-value spots. Jewelry stores and casinos often use them. We adjust the settings to get the best picture. We make sure you get the quality you paid for.`,
    features: [
      'Legendary Sony STARVIS sensor technology',
      'View-DR for widest dynamic range',
      'Broadcast-quality image processsing',
      'Sixth Sense analytics integration',
      'High frame rate recording capabilities'
    ],
    faqs: [
      { question: 'Why are Sony cameras special?', answer: 'They use proprietary image processing derived from Sony’s professional broadcast cameras.' },
      { question: 'Are they good for night?', answer: 'Yes, Sony STARVIS sensors are the industry benchmark for low-light performance.' },
      { question: 'Do they support 4K?', answer: 'Yes, Sony offers native 4K cameras with incredible detail.' }
    ]
  },
  'Tiandy': {
    title: 'Tiandy Technologies Installation',
    description: `Tiandy focuses on full-color night vision. Their cameras can see color in the dark. CamHarbor installs Tiandy for reliable night security.

Tiandy uses "Super Starlight" tech. This lets them see color when other cameras see black and white. Detailed color is useful for evidence. They also have affordable cameras with high-end features.

Tiandy is great for outdoor areas. Parks and parking lots benefit from color night vision. We also set up their warning systems. These can track intruders and warn them with light or sound.`,
    features: [
      'Color Maker technology for 24/7 color',
      'Super Starlight sensitivity (0.0004 Lux)',
      'Early Warning System with laser tracking',
      'Turbo AI for efficient object sorting',
      'Cost-effective high-spec solutions'
    ],
    faqs: [
      { question: 'Does it really see color at night?', answer: 'Yes, Tiandy Super Starlight cameras can capture color in near-total darkness.' },
      { question: 'What is Early Warning?', answer: 'It detects intruders and can track them or use light/sound to warn them before they break in.' },
      { question: 'Is it compatible with other NVRs?', answer: 'Tiandy supports ONVIF, making it compatible with most standard NVRs.' }
    ]
  },
  'Uniview': {
    title: 'Uniview (UNV) Security Systems',
    description: `Uniview (UNV) is a leader in IP cameras. They offer modern, digital security. CamHarbor installs UNV systems for clients who want future-proof tech.

UNV cameras are smart and efficient. They use U-Code to save storage space. They also have features like people counting. This is helpful for shops to track visitors.

We install UNV systems with network cables (CAT6). This looks neat and is easy to expand. We set up the EZView app for you. We also configure the storage to make sure you get long recording times.`,
    features: [
      'Pioneers in IP video surveillance',
      'U-Code deep compression technology',
      'Smart functions like heat mapping and people counting',
      'Tri-Guard active deterrence series',
      'Reliable PoE solutions for scalability'
    ],
    faqs: [
      { question: 'Is Uniview better than analog?', answer: 'Uniview specializes in IP/Network cameras which generally offer higher clarity and flexibility than analog.' },
      { question: 'What is U-Code?', answer: 'It is a smart compression standard that significantly reduces video file sizes without losing quality.' },
      { question: 'Can it count people?', answer: 'Yes, specific UNV models have built-in people counting for retail analytics.' }
    ]
  },
  'Ezviz': {
    title: 'Ezviz Smart Home Security',
    description: `Ezviz makes smart cameras for homes. They are easy to use and look good. CamHarbor installs Ezviz systems effectively for you. We ensure they are placed right and connected well.

Ezviz cameras are great for families. You can talk through them using two-way audio. They have features like color night vision and motion alerts. They connect to your WiFi and store video on a card or cloud.

Professional installation helps a lot. We mount cameras in the best spots for a wide view. We hide the power cables for a clean look. We also check your WiFi signal to ensure smooth video streaming.`,
    features: [
      'WiFi-based smart home cameras',
      'Two-way audio talk',
      'Pan-Tilt-Zoom (PTZ) options for 360 view',
      'Cloud and SD card storage options',
      'Battery-powered wire-free models available'
    ],
    faqs: [
      { question: 'Do I need a DVR for Ezviz?', answer: 'No, Ezviz cameras record to internal SD cards or the cloud.' },
      { question: 'Can I talk through the camera?', answer: 'Yes, most models feature 2-way audio to speak with visitors or pets.' },
      { question: 'Does it work if WiFi fails?', answer: 'It will continue recording to the SD card, but remote view will stop until WiFi returns.' }
    ]
  }
};

export const REPAIR_CONTENT: Record<string, PageContent> = {
  'camera-not-working': {
    title: 'CCTV Camera Not Working - Diagnosis & Repair',
    description: `A "dead" camera is a security gap you cannot afford. When a CCTV camera simply stops working—showing a black screen or no power LED—it can be due to a multitude of reasons. At CamHarbor, we specialize in reviving dead cameras and restoring your security grid to full functionality.

The issue often stems from power delivery failure, such as a burnt power adapter, a blown fuse in the power supply unit (SMPS), or a severed cable. Environmental factors like water ingress (if the camera seal is broken) or lightning surges can also fry the camera's internal circuit board.

Our repair process starts with a voltage check at the camera end to rule out cabling issues. If the power is reaching the camera but it won't turn on, we test it with a service monitor. We carry replacement DC pins, Baluns, and adapters to fix the issue on-site. If the camera sensor itself is damaged, we assess if a board-level repair is feasible or if replacement is more cost-effective.`,
    features: [
      'Voltage and power supply testing',
      'Cable continuity checks',
      'Moisture and corrosion verification',
      'Firmware corruption checks',
      'Immediate replacement of minor faulty parts'
    ],
    faqs: [
      { question: 'Why did my camera stop suddenly?', answer: 'Power surges or adapter failure are the most common causes for sudden failure.' },
      { question: 'Can a burnt camera be repaired?', answer: 'It depends on the extent of damage. Minor component burnout is fixable; sensor damage usually requires replacement.' },
      { question: 'Do you check cabling too?', answer: 'Yes, we always verify cables before touching the camera hardware.' }
    ]
  },
  'no-signal': {
    title: 'No Signal / Video Loss Troubleshooting',
    description: `Seeing "No Signal" or "Video Loss" on your monitor is a frustrating experience. It means your DVR is working, but it's not hearing from the camera. This is the most common inquiry we receive, and our technicians are experts at tracing the source of the interruption.

This issue is almost exclusively related to the transmission path. It could be a loose BNC connector behind the DVR, a rusted connector at the camera end, a cut in the coaxial cable due to rodents or construction work, or a weak power supply that can't push the video signal back to the recorder.

We use cable testers to find breaks in the line. We re-crimp connectors using high-quality BNC/DC jacks to ensure a tight fit. If the cable run is too long (over 90 meters for standard coax), we install video baluns to boost the signal. We ensure your video feed returns crisp and stable, without flickering.`,
    features: [
      'BNC connector re-crimping and replacement',
      'Cable continuity testing & tracing',
      'Video Balun installation for long runs',
      'Power voltage drop analysis',
      'Rodent damage repair'
    ],
    faqs: [
      { question: 'Why does it say No Signal only at night?', answer: 'IR LEDs draw more power at night. If the power supply is weak, the camera voltage drops, cutting the video signal.' },
      { question: 'Is my camera broken?', answer: 'Rarely. "No Signal" usually points to cable or power issues, not the camera unit itself.' },
      { question: 'Do I need to change the whole wire?', answer: 'Not always. We can often splice and repair the damaged section of the wire.' }
    ]
  },
  'blur-image': {
    title: 'Blurry or Foggy CCTV Image Repair',
    description: `A blurry CCTV image defeats the purpose of having a camera. If you can't identify faces or license plates, your evidence is useless. CamHarbor offers lens cleaning, focusing, and sensor maintenance services to bring clarity back to your surveillance footage.

Blurriness is often caused by dirty lenses (dust, cobwebs), moisture condensation inside the housing (fogging), or the focus shifting over time due to vibrations or thermal expansion. In older cameras, the plastic dome cover might degrade and become opaque due to sun exposure.

Our technicians perform a deep clean of the camera housing and lens using specialized solutions. For varifocal cameras, we mechanically re-adjust the focus and zoom to sharpen the image. If moisture is trapped inside, we open the housing, dry it out, and replace the silica gel desiccant packets to prevent future fogging.`,
    features: [
      'Lens and housing deep cleaning',
      'Varifocal lens manual focusing',
      'Desiccant replacement for fog removal',
      'Dome cover polishing or replacement',
      'Resolution setting optimization'
    ],
    faqs: [
      { question: 'Why is my camera foggy at night?', answer: 'IR light reflects off dirty dome covers or moisture, causing a "white fog" or glare effect.' },
      { question: 'Can you fix scratched lenses?', answer: 'Deep scratches require cover replacement, but minor haze can be cleaned.' },
      { question: 'Why is the image out of focus?', answer: 'Vibrations can loosen the lens focus mechanism over time, requiring manual adjustment.' }
    ]
  },
  'recording-issue': {
    title: 'CCTV Recording & Playback Issues',
    description: `Discovering that an incident occurred but your CCTV didn't record it is a nightmare scenario. Recording issues—such as gaps in footage, inability to playback, or overwriting too quickly—are critical failures that need immediate attention. CamHarbor audits and repairs DVR/NVR recording functions.

The culprit is often the Hard Disk Drive (HDD). Surveillance drives run 24/7 and eventually wear out or develop bad sectors. Incorrect configuration (like recording 24/7 instead of on-motion) can also fill up storage too fast. Sometimes, the DVR's date/time is wrong, making finding footage impossible.

We diagnose the health of your HDD. We configure recording schedules to maximize retention (e.g., using Motion Detection or H.265+ compression). We verify that "Overwrite" settings are correctly enabled so the system loops recording automatically. We ensure your evidence is actually being saved.`,
    features: [
      'Hard Disk health check & bad sector scan',
      'Recording schedule configuration (Motion/24x7)',
      'H.265/H.264 compression optimization',
      'Date/Time synchronization',
      'Firmware updates for recording stability'
    ],
    faqs: [
      { question: 'Why is it only recording 2 days?', answer: 'Your HDD might be full or too small, or compression settings are not optimized.' },
      { question: 'Why can’t I find yesterday’s video?', answer: 'Check the system date/time. If it reset to 1970/2000, the footage is saved under that wrong date.' },
      { question: 'Did my hard disk crash?', answer: 'If the DVR beeps or shows "No HDD", the drive has likely failed.' }
    ]
  },
  'mobile-view-setup': {
    title: 'CCTV Mobile View & Remote Setup',
    description: `The ability to view your cameras on your smartphone is an essential convenience. If your mobile view has stopped working, or you got a new phone and need setup, CamHarbor provides expert networking configuration services to get you back online.

Issues often arise from IP address changes (if you don't have a static IP), router resets, or app updates logging you out. P2P (Peer-to-Peer) cloud services might be offline, or port forwarding rules might have been deleted from your router.

We configure the DVR/NVR network settings to ensure stable connectivity. We set up the official brand apps (Hik-Connect, gCMOB, DMSS, etc.) on your new devices. We also guide you on creating secure localized accounts so you don't rely only on guest logins. We ensure you can see your home or office from anywhere.`,
    features: [
      'DVR/NVR Network Configuration (IP/Gateway)',
      'Mobile App installation & pairing',
      'P2P / Cloud account creation',
      'Router Port Forwarding (if required)',
      'Multi-device access setup'
    ],
    faqs: [
      { question: 'Why does it say "Network Abnormal"?', answer: 'Your DVR is likely disconnected from the router, or the internet cable is loose.' },
      { question: 'I changed my WiFi password, now CCTV is offline.', answer: 'WiFi cameras need to be re-connected to the new WiFi credentials.' },
      { question: 'Can I view on multiple phones?', answer: 'Yes, we can share the device access to family members or staff securely.' }
    ]
  },
  'dvr-hard-disk-replacement': {
    title: 'DVR/NVR Hard Disk Replacement',
    description: `The Hard Disk Drive (HDD) is the heart of your recording system. Because surveillance drives write data continuously 24/7, they significantly prone to failure after 3-4 years. CamHarbor offers on-site hard disk replacement and upgrade services with genuine surveillance-grade drives.

We don't just swap the drive; we analyze your storage needs. If you need more recording days, we upgrade you to a higher capacity (e.g., 1TB to 4TB). We use specialized Surveillance HDDs (like WD Purple or Seagate SkyHawk) which are designed to handle multiple camera streams and prevent frame loss, unlike standard desktop drives.

Our service includes opening the DVR/NVR, cleaning out internal dust, installing the new drive, formatting it, and configuring the recording parameters. we also assist in backing up any critical data from the old drive if it is still partially readable.`,
    features: [
      'Genuine Surveillance HDD (WD Purple/Seagate SkyHawk)',
      'Capacity upgrades (1TB, 2TB, 4TB, 8TB+)',
      'Old drive data recovery (if feasible)',
      'Internal DVR cleaning during replacement',
      'Recording retention calculation'
    ],
    faqs: [
      { question: 'Can I use a computer hard disk?', answer: 'It is not recommended. Desktop drives overheat and fail quickly in CCTV systems. Use Surveillance drives.' },
      { question: 'How many days of recording will 1TB give?', answer: 'It depends on camera count and quality, but roughly 10-15 days for a 4-camera HD setup.' },
      { question: 'Do you offer warranty on HDDs?', answer: 'Yes, new HDDs come with manufacturer warranty (usually 2-3 years).' }
    ]
  },
  'password-reset': {
    title: 'CCTV Password Reset & Unlock',
    description: `Locked out of your own security system? Forgetting the admin password to your DVR or NVR is common, but resetting it isn't as simple as clicking "Forgot Password" due to strict security protocols. CamHarbor provides authorized password reset services for all major brands.

Different brands have different reset procedures—some require security questions, others need a dynamic XML key file from the manufacturer, and some have physical reset buttons on the motherboard. Attempting to bypass this incorrectly can lock the system permanently.

Our technicians are trained in the official unlock procedures for Hikvision, CP Plus, Dahua, and others. We verify ownership (to prevent unauthorized access requests) and then proceed to reset the device to factory defaults or restoration of admin access. We then help you set a strong, memorable password.`,
    features: [
      'Admin password recovery',
      'Pattern lock reset',
      'Authorized XML key generation',
      'Factory reset services',
      'Secure new password configuration'
    ],
    faqs: [
      { question: 'Will resetting delete my recordings?', answer: 'Usually, resetting the password does NOT delete video data. Factory resetting settings might, but we avoid that if possible.' },
      { question: 'Why is it so hard to reset?', answer: 'To prevent thieves or hackers from easily taking over your security system.' },
      { question: 'How long does it take?', answer: 'Instant for some brands; others may take 1-2 hours to receive codes from the manufacturer support.' }
    ]
  },
  'online-configuration': {
    title: 'CCTV Online & Network Configuration',
    description: `Modern CCTV systems are powerful network devices. Getting them online for remote viewing, email alerts, and integration with other smart devices requires technical networking knowledge. CamHarbor offers expert online configuration services to unlock the full potential of your IP surveillance system.

We resolve IP address conflicts, configure Subnet Masks and Gateways, and set up DNS servers for stable connectivity. For businesses, we can segregate CCTV traffic onto a separate VLAN to ensure it doesn't slow down your office WiFi. We also configure DDNS (Dynamic DNS) if you don't have a static IP address.

Our service ensures that your cameras are accessible securely. We disable insecure ports (like Telnet) and enable encryption. We also set up email notifications so you get a snapshot in your inbox whenever motion is detected in a critical area.`,
    features: [
      'Static IP and DHCP configuration',
      'Port Forwarding & DDNS setup',
      'VLAN and network segregation',
      'Email alert configuration',
      'Cloud storage linking (Google Drive/Dropbox)'
    ],
    faqs: [
      { question: 'Can I view CCTV on my PC?', answer: 'Yes, we can install CMS software on your PC for centralized monitoring.' },
      { question: 'Is it safe to put cameras online?', answer: 'Yes, if configured correctly with strong passwords and disabled default ports.' },
      { question: 'My internet is slow, will CCTV affect it?', answer: 'We can configure "Sub-streams" for remote view to use very little data.' }
    ]
  },
  'cable-repair': {
    title: 'CCTV Cable Dressing & Repair',
    description: `Messy, hanging, or damaged cables are not just an eyesore—they are the leading cause of signal failure. Over time, sunlight, rain, and heat degrade zip ties and tape, causing wires to dangle and break. CamHarbor provides cable dressing, conducting, and repair services to tidy up your installation.

We identify and replace damaged sections of Coaxial (3+1) or CAT6 cables. We install PVC conduits or casing-capping to protect exposed wires from weather and vandalism. We re-terminate rusty joints with waterproof junction boxes to prevent oxidation.

A neat setup is a reliable setup. We organize the clutter behind your DVR/NVR rack, using cable managers and ties so you can easily identify which wire belongs to which camera. This preventative maintenance significantly extends the life of your CCTV system.`,
    features: [
      'Cable routing and dressing',
      'PVC conduit and casing installation',
      'Waterproof junction box installation',
      'Connector replacement (BNC/DC/RJ45)',
      'Rack management'
    ],
    faqs: [
      { question: 'My wires were cut by rats.', answer: 'We can splice the wires and install steel flexible conduits to prevent future rodent attacks.' },
      { question: 'Cables are hanging loose on the wall.', answer: 'We will clip them properly or hide them inside PVC casings for a clean look.' },
      { question: 'Do you use CAT6 or Coax?', answer: 'We repair whatever you have, but recommend CAT6 for all new IP installations.' }
    ]
  },
  'power-supply-repair': {
    title: 'CCTV Power Supply Repair & Replacement',
    description: `Power issues are the silent killers of CCTV systems. A fluctuating or failing power supply can cause rolling lines on video, ghosting, night vision failure, or damage the camera's motherboard. CamHarbor troubleshoots and replaces faulty CCTV power units.

We deal with both individual power adapters and central SMPS (Switched Mode Power Supply) units. Common symptoms of power failure include cameras restarting repeatedly or working during the day but failing at night (when IR turns on).

We replace cheap plastic supplies with heavy-duty, surge-protected metal power units. We ensure that the amperage is sufficient for the number of cameras and the length of the cable run (as voltage drops over distance). We also check your UPS or inverter connection to ensure valid backup during power cuts.`,
    features: [
      'SMPS diagnosis and replacement',
      'Power adapter replacement (12V 1A/2A)',
      'Voltage drop calculation & correction',
      'Surge protection installation',
      'UPS/Inverter load balancing'
    ],
    faqs: [
      { question: 'Why do cameras flicker?', answer: 'Often due to insufficient amperage from a failing power supply unit.' },
      { question: 'Do I need a stabilizer?', answer: 'If your area has high voltage fluctuation, a stabilizer is highly recommended.' },
      { question: 'Can one power supply run all cameras?', answer: 'Yes, a central SMPS can power 4, 8, or 16 cameras, provided it has enough total Amp rating.' }
    ]
  }
};
