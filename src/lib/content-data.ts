
export interface PageContent {
  title: string;
  description: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}

export const BRAND_CONTENT: Record<string, PageContent> = {
  'Hikvision': {
    title: 'Hikvision CCTV Camera Installation & Support',
    description: `Hikvision is a world-leading provider of security products and solutions, renowned for its innovative CCTV technology and reliability. At CamHarbor, we are authorized experts in Hikvision surveillance systems, offering comprehensive installation, configuration, and maintenance services across Delhi NCR.

When you choose Hikvision, you are investing in a system that offers advanced features like ColorVu for 24/7 full-color night vision, and AcuSense technology which uses deep learning algorithms to distinguish between humans, vehicles, and other moving objects, significantly reducing false alarms. Whether you need a simple 4-channel setup for your home or a complex 64-channel NVR system for a large corporate office, Hikvision's diverse product portfolio covers it all.

Our certified technicians ensure that your Hikvision cameras are installed with precision. We handle everything from strategic camera placement to minimize blind spots, to neat cabling and secure conduit installation. We also configure the Hik-Connect mobile app, allowing you to monitor your property from anywhere in the world in real-time. By choosing an authorized installer, you ensure your warranty remains valid and you get genuine products with the latest firmware updates.`,
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
    description: `CP Plus is dominant in the Indian market, known for its slogan "Upar Wala Sab Dekh Raha Hai". It is a brand that offers robust, cost-effective, and user-friendly security solutions tailored specifically for Indian conditions. CamHarbor provides end-to-end CP Plus installation services, ensuring your property is secured with one of the most trusted brands in the country.

CP Plus excels in providing affordable yet high-quality analog and IP camera systems. Their EzyKam series of WiFi cameras is particularly popular for smart homes, offering plug-and-play functionality with two-way talk and motion tracking. For businesses, their Orange range offers heavy-duty durability and superior image clarity.

Our installation process for CP Plus systems focuses on durability and ease of use. We ensure that your DVR/NVR is safely housed, cabling is weather-proofed, and the power supply is stable to prevent surges. We also provide training on how to use the CP Plus mobile app (gCMOB/iCMOB) so you can easily playback footage and take snapshots whenever needed.`,
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
    description: `Dahua Technology is a pioneer in the video surveillance industry, famous for inventing the HDCVI technology which revolutionized analog high-definition transmission. CamHarbor brings you the best of Dahua's cutting-edge security solutions, from TiOC (Three-in-One Camera) active deterrence cameras to advanced AI-driven NVRs.

Dahua's cameras are preferred for their superior image processing and low-light performance using Starlight technology. Their TiOC cameras are unique—they feature 24/7 full-color monitoring, active deterrence with strobe lights and sirens to warn off intruders, and AI for accurate alarm triggers. This makes them an excellent choice for perimeter protection in villas, factories, and warehouses.

We specialize in setting up Dahua's advanced analytics features. Our team can configure line crossing detection, intrusion detection, and face recognition features to make your security system proactive rather than just a recording device. We also integrate Dahua systems with DMSS mobile app for instant push notifications.`,
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
    description: `Honeywell is a Fortune 100 technology company that sets the standard for industrial and commercial security. Known for premium build quality and enterprise-grade reliability, Honeywell CCTV systems are the preferred choice for banks, corporate offices, and luxury residences. CamHarbor offers certified installation of Honeywell's Impact and Performance series cameras.

Honeywell systems are designed to last. They offer exceptional build quality with high IP ratings (IP66/IP67) for water and dust resistance, making them ideal for harsh outdoor environments. Their NVRs are robust, supporting high-bandwidth recording and RAID storage options for long-term data retention critical for compliance in banking and corporate sectors.

Our team is trained to handle the sophisticated setup that Honeywell systems often require. We ensure structured cabling compliance, network security configuration, and integration with other Honeywell building management systems if present. We maximize the utility of Honeywell's clear imaging and reliable hardware for critical infrastructure protection.`,
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
    description: `Bosch Security Systems represents the pinnacle of German engineering in the surveillance domain. Bosch cameras are not just recording devices; they are intelligent sensors that analyze data in real-time. CamHarbor provides specialized installation for Bosch security systems, catering to clients who demand the highest level of detail and analytics.

Bosch is famous for its "Video Analytics at the Edge," meaning the camera itself processes data to detect loitering, idle objects, or wrong-way motion, without needing a heavy server. This makes their systems incredibly fast and bandwidth-efficient. Their MIC IP series of rugged PTZ cameras are legendary for surviving extreme conditions, making them suitable for industrial sites and critical perimeters.

Installing Bosch systems requires a high level of technical expertise. Our technicians are skilled in configuring Bosch's Intelligent Video Analytics (IVA) to suit your specific security rules. We ensure that every alert is meaningful and that the video quality is optimized for evidentiary use, capturing minute details like license plates and faces with clarity.`,
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
    description: `Panasonic (now i-PRO) has a legacy of excellence in imaging technology. Their surveillance cameras deliver crystal-clear video with accurate color reproduction, essential for evidence collection. CamHarbor offers professional installation services for Panasonic's wide range of network cameras and recorders.

Panasonic cameras are known for their intelligent auto-sensing capabilities. They can automatically adjust settings based on scene dynamics—detecting if a person is moving, if there is rain, or if light levels change rapidly. Features like Face Super Dynamic ensure that faces remain clear even when backlit, which is a common problem in entrance lobbies and glass-fronted shops.

We recommend Panasonic for environments where video evidence quality is paramount, such as retail counters, bank tellers, and school entrances. Our installation includes fine-tuning the focus and zoom (often motorized in Panasonic models) to capture the perfect field of view. We also configure the secure encryption features to protect your video feed from unauthorized access.`,
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
    description: `Godrej is a household name in India, synonymous with security. Godrej Security Solutions offers a range of CCTV products that are specifically designed for Indian homes and businesses, backed by a brand trust that spans decades. CamHarbor is proud to install Godrej CCTV systems, bringing peace of mind to thousands of families.

Godrej's strength lies in its ecosystem. Apart from CCTV, they offer video door phones, alarm systems, and safes, all of which can often be sourced and serviced under one roof. Their CCTV cameras are robust, easy to operate, and come with reliable service support across the country. The "See Thru" range offers excellent value for money with high-definition recording.

Our Godrej installation services are customer-centric. We help you choose the right mix of dome and bullet cameras for your property. We pay special attention to integrating the CCTV system with other Godrej security products you might have, creating a cohesive security layer. We also demonstrate how to use the simplistic mobile app for daily monitoring.`,
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
    description: `Samsung's security division, now known as Hanwha Vision, manufactures some of the most advanced optical and SoC (System on Chip) technologies in the world. They are a top-tier choice for projects requiring high-end specifications and cyber security. CamHarbor installs and supports the full range of Wisenet (Samsung) cameras.

Hanwha Vision stands out for its Wisenet chipsets which provide distinct features like extreme WDR (Wide Dynamic Range), defogging, and digital image stabilization. Their cameras are heavily used in government projects, city surveillance, and large enterprises due to their TAA compliance and strong cybersecurity measures against hacking.

Installing Samsung/Hanwha systems requires precision. Our team ensures that the advanced features like "Hallway View" (creating a vertical video aspect ratio for corridors) are utilized correctly to maximize coverage. We configure the NVRs for optimal throughput and set up redundancy measures to ensure no video is lost even during drive failures.`,
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
    description: `Sony is the undisputed king of image sensors. Almost every high-quality camera in the world uses a Sony STARVIS sensor. Sony's own line of security cameras leverages their broadcast-quality imaging expertise to deliver video surveillance with exceptional color fidelity and sensitivity. CamHarbor provides installation for Sony's network camera lineup.

Sony cameras are renowned for their ability to capture detail in high-contrast lighting situations using View-DR technology. While many manufacturers use Sony sensors, Sony's own image processing algorithms (ISP) extract the absolute best performance from them. This results in natural-looking colors and minimal noise even in near-darkness.

We recommend Sony cameras for clients who need "broadcast quality" surveillance—such as in casinos, jewelry stores, or critical monitoring rooms. Installation involves careful lens selection and configuration of exposure settings to match the environment. We ensure that you get the visual clarity that the Sony brand promises.`,
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
    description: `Tiandy is a rising giant in the global surveillance market, focusing exclusively on full-color solutions. They are pioneers of the "Color Maker" technology which allows cameras to capture color images in extremely low light without auxiliary lights. CamHarbor offers Tiandy installation for customers looking for advanced night-time visibility.

Tiandy's claim to fame is its "Super Starlight" technology which can see color in conditions as dark as 0.0004 Lux. Unlike standard cameras that switch to black and white IR mode at night, Tiandy cameras stay in color mode longer, providing crucial details like the color of a car or a person's clothes. They also offer cost-effective Project-line cameras that bring high-end features to affordable price points.

For installation, Tiandy cameras are excellent for outdoor perimeters, parks, and parking lots where lighting is poor. Our technicians configure the "Early Warning" systems on Tiandy cameras which can track intruders and emit laser warnings. We ensure that your property is protected by the latest in color-night-vision technology.`,
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
    description: `Uniview (UNV) is the third-largest player in China's video surveillance market and a specialist in IP video. They are known for bringing professional IP technology to the mass market. CamHarbor installs Uniview systems for clients who want purely IP-based, future-proof security infrastructure.

UNV products are sleek, modern, and packed with smart features like U-Code (a deep compression technology that saves up to 95% storage space) and pixel-based smart functions. Their Prime and Pro series offer advanced analytics like people counting and heat mapping, which are great for retail businesses.

Our Uniview installations are fully IP-based, utilizing Cat6 cabling and PoE (Power over Ethernet) switches. This reduces cabling clutter and allows for easy scalability. We set up UNV's EZView app for you and configure the NVR to utilize U-Code compression, ensuring you get weeks of recording even on smaller hard drives.`,
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
    description: `Ezviz is the consumer-facing brand of Hikvision, designed specifically for smart homes and DIY enthusiasts. These cameras are WiFi-enabled, battery-powered (selected models), and incredibly easy to use. CamHarbor provides professional setup services for Ezviz ecosystems, ensuring optimal placement and network configuration.

Ezviz cameras like the C6N, C3X, and C8C are bestsellers because they pack pro features into cute, friendly designs. They feature pan-tilt capabilities, color night vision, AI human detection, and two-way talk. They connect directly to your home WiFi and store footage on SD cards or the cloud, eliminating the need for a bulky DVR/NVR box.

While Ezviz is "DIY", professional installation makes a difference. We mount cameras in hard-to-reach corners for better views, conceal the power cables for a clean look, and ensure your WiFi network is strong enough to support reliable streaming. We also integrate multiple Ezviz devices into a single app dashboard for your convenience.`,
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
