import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaCalendarCheck, FaUsers, FaClipboardList, 
  FaUtensils, FaMedal, FaSmile, FaGamepad, FaFilm, 
  FaTrophy, FaChess, FaLaptop, FaArrowRight,FaInfoCircle,
  FaMapMarkerAlt,FaHiking,FaGlassCheers,FaUmbrellaBeach,FaSwimmer,FaFire,FaMusic
,FaMountain,FaTree
} from 'react-icons/fa';
import styles from './EventFlow.module.css';


//fun friday
import cooking from '../../aservicephotos/cooking.jpeg';
import gaming from '../../aservicephotos/gaming.jpeg';
import movie from '../../aservicephotos/movie.jpeg';

// social activities
import beach from '../../aservicephotos/beach.jpg';
import plants from '../../aservicephotos/plants.jpeg';
import blood from '../../aservicephotos/blood.jpg';


//corporate trips
import bali from '../../aservicephotos/bali.jpg';
import goa from '../../aservicephotos/goa.jpeg';
import mumbai from '../../aservicephotos/mumbai.jpeg';
import bangalore from '../../aservicephotos/banglore.jpeg';
import kerala from '../../aservicephotos/kerala.jpeg';
import rajasthan from '../../aservicephotos/rajasthan.jpeg';


//conferences
import tech from '../../aservicephotos/tech.jpg';
import leadership from '../../aservicephotos/leadership.jpg';
import hr from '../../aservicephotos/hr.jpg';

//cultural events
import cuisine from '../../aservicephotos/cuisine day.jpg';
import costume from '../../aservicephotos/costume.jpg';
import music from '../../aservicephotos/music.jpg';
import food from '../../aservicephotos/food fest.jpg';
import heritage from '../../aservicephotos/heritage.jpg';
import folk from '../../aservicephotos/folk.jpg';


//weekend outing

import hiking from '../../aservicephotos/hiking.jpeg';
import bbeach from '../../aservicephotos/Beach Retreat.jpeg';
import park from '../../aservicephotos/park.jpeg';





const eventFlowData = {
  "fun-fridays": {
    "cooking-challenge": {
      title: "Cooking Challenge",
      description: "A fun and engaging cooking competition that brings teams together through culinary creativity",
      image: cooking,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Choose a convenient Friday afternoon for your team's cooking challenge"
        },
        {
          icon: <FaUsers />,
          title: "Team Formation",
          description: "Divide participants into balanced teams of 4-5 members each"
        },
        {
          icon: <FaClipboardList />,
          title: "Challenge Briefing",
          description: "Teams receive their cooking challenge and rules from our professional chef"
        },
        {
          icon: <FaUtensils />,
          title: "Cooking Competition",
          description: "Teams work together to create their culinary masterpieces within the time limit"
        },
        {
          icon: <FaMedal />,
          title: "Judging & Awards",
          description: "Dishes are judged on taste, presentation, creativity, and teamwork"
        },
        {
          icon: <FaSmile />,
          title: "Celebration",
          description: "Everyone enjoys the food together in a celebratory team dinner"
        }
      ],
      benefits: [
        "Improves team communication",
        "Builds collaboration skills",
        "Encourages creativity",
        "Creates shared memories",
        "Reduces workplace stress"
      ],
      testimonial: {
        quote: "The cooking challenge was the highlight of our quarter! Our team is still talking about it months later.",
        author: "Priya Sharma, HR Director at TechCorp India"
      }
    },
    "game-tournament": {
      title: "Game Tournament",
      description: "Competitive gaming that builds team spirit through friendly competition",
      image: gaming,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Select a Friday afternoon for your team's gaming tournament"
        },
        {
          icon: <FaGamepad />,
          title: "Game Selection",
          description: "Choose from our catalog of team-based games that match your team's interests"
        },
        {
          icon: <FaUsers />,
          title: "Team Formation",
          description: "Create balanced teams to ensure fair and fun competition"
        },
        {
          icon: <FaChess />,
          title: "Tournament Setup",
          description: "Our facilitators set up the tournament brackets and explain the rules"
        },
        {
          icon: <FaLaptop />,
          title: "Game Play",
          description: "Teams compete in rounds of exciting gameplay with professional facilitation"
        },
        {
          icon: <FaTrophy />,
          title: "Awards Ceremony",
          description: "Winners receive prizes and all participants celebrate their achievements"
        }
      ],
      benefits: [
        "Builds team spirit",
        "Encourages healthy competition",
        "Improves strategic thinking",
        "Creates a fun work environment",
        "Strengthens team bonds"
      ],
      testimonial: {
        quote: "Our team gaming tournament revealed leadership qualities in team members we hadn't noticed before!",
        author: "Rahul Mehta, Team Lead at InnovateTech"
      }
    },
    "movie-night": {
      title: "Movie Night",
      description: "A relaxing evening of film and discussion to unwind and bond",
      image: movie,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Select a Friday evening for your team's movie night"
        },
        {
          icon: <FaFilm />,
          title: "Film Selection",
          description: "Choose a film that aligns with your team's interests or learning objectives"
        },
        {
          icon: <FaClipboardList />,
          title: "Setup & Preparation",
          description: "We prepare a comfortable viewing environment with premium audio-visual setup"
        },
        {
          icon: <FaUtensils />,
          title: "Refreshments",
          description: "Enjoy gourmet snacks and beverages during the screening"
        },
        {
          icon: <FaUsers />,
          title: "Discussion",
          description: "Participate in a facilitated discussion about themes and insights from the film"
        },
        {
          icon: <FaSmile />,
          title: "Team Bonding",
          description: "Continue the evening with informal socializing and team bonding"
        }
      ],
      benefits: [
        "Provides stress relief",
        "Encourages thoughtful discussion",
        "Creates shared cultural experiences",
        "Improves team communication",
        "Builds a positive team culture"
      ],
      testimonial: {
        quote: "Our movie nights have become a monthly tradition that everyone looks forward to. It's amazing how much closer our team has become.",
        author: "Ananya Patel, CEO at CreativeMinds"
      }
    }
  },

  "corporate-trips": {
    bali: {
      title: "Bali Corporate Retreat",
      description: "Experience the beauty of Bali with your team. Perfect for corporate retreats and team bonding.",
      image: bali,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Plan your 5-day Bali retreat with flexible dates and accommodation options",
        },
        {
          icon: <FaUsers />,
          title: "Team Preparation",
          description: "Pre-trip briefing, travel documentation, and team activity planning",
        },
        {
          icon: <FaClipboardList />,
          title: "Arrival & Check-in",
          description: "Airport transfer, hotel check-in, and welcome orientation session",
        },
        {
          icon: <FaUtensils />,
          title: "Cultural Activities",
          description: "Temple visits, traditional cooking classes, and local cultural experiences",
        },
        {
          icon: <FaMedal />,
          title: "Team Building",
          description: "Beach activities, water sports, and collaborative team challenges",
        },
        {
          icon: <FaSmile />,
          title: "Reflection & Departure",
          description: "Final team session, feedback collection, and departure arrangements",
        },
      ],
      benefits: [
        "Enhanced team bonding in exotic location",
        "Cultural exposure and global perspective",
        "Stress relief through tropical environment",
        "Improved communication in relaxed setting",
        "Memorable shared experiences",
      ],
      testimonial: {
        quote:
          "Our Bali retreat was transformational. The team came back more connected and motivated than ever before.",
        author: "Rajesh Kumar, CEO at TechVentures",
      },
    },
    goa: {
      title: "Goa Beach Corporate Getaway",
      description: "Enjoy the beaches and vibrant culture of Goa. Great for team relaxation and strategic planning.",
      image:goa,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Book your 4-day Goa getaway with beachfront accommodation",
        },
        {
          icon: <FaUsers />,
          title: "Travel Coordination",
          description: "Group travel arrangements and pre-trip team briefing",
        },
        {
          icon: <FaUmbrellaBeach />,
          title: "Beach Activities",
          description: "Beach volleyball, water sports, and seaside team building games",
        },
        {
          icon: <FaClipboardList />,
          title: "Strategic Sessions",
          description: "Beachside planning sessions and strategic workshops",
        },
        {
          icon: <FaUtensils />,
          title: "Cultural Exploration",
          description: "Local cuisine experiences and cultural site visits",
        },
        {
          icon: <FaGlassCheers />,
          title: "Celebration",
          description: "Beach party, team achievements celebration, and departure",
        },
      ],
      benefits: [
        "Relaxed environment for strategic thinking",
        "Beach activities promote team spirit",
        "Cultural diversity appreciation",
        "Work-life balance demonstration",
        "Rejuvenation through coastal atmosphere",
      ],
      testimonial: {
        quote:
          "Goa provided the perfect backdrop for our strategic planning. The relaxed atmosphere helped us think outside the box.",
        author: "Priya Nair, Strategy Director at InnovateCorp",
      },
    },
    mumbai: {
      title: "Mumbai Business Hub Experience",
      description: "Explore the business capital of India. Perfect for corporate meetings and networking.",
      image: mumbai,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Plan your 3-day Mumbai business trip with premium hotel bookings",
        },
        {
          icon: <FaUsers />,
          title: "Business Networking",
          description: "Industry meetups, networking events, and business district tours",
        },
        {
          icon: <FaClipboardList />,
          title: "Corporate Meetings",
          description: "Client meetings, partnership discussions, and business presentations",
        },
        {
          icon: <FaUtensils />,
          title: "Cultural Immersion",
          description: "Bollywood studio visit, local market tours, and authentic dining",
        },
        {
          icon: <FaMedal />,
          title: "Team Activities",
          description: "Marine Drive walks, team dinners, and collaborative sessions",
        },
        {
          icon: <FaSmile />,
          title: "Business Closure",
          description: "Final meetings, deal closures, and departure planning",
        },
      ],
      benefits: [
        "Business networking opportunities",
        "Exposure to India's financial capital",
        "Professional development through city experience",
        "Cultural diversity understanding",
        "Strategic business insights",
      ],
      testimonial: {
        quote: "Mumbai opened our eyes to new business opportunities. The networking alone was worth the entire trip.",
        author: "Amit Sharma, Business Development Head at GlobalTech",
      },
    },
    bangalore: {
      title: "Bangalore Tech Hub Innovation Tour",
      description: "Visit India's tech hub. Ideal for tech companies and innovation workshops.",
      image: bangalore,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Plan your 3-day Bangalore tech tour with innovation center visits",
        },
        {
          icon: <FaUsers />,
          title: "Tech Ecosystem Tour",
          description: "Startup incubators, tech parks, and innovation center visits",
        },
        {
          icon: <FaLaptop />,
          title: "Innovation Workshops",
          description: "Hands-on workshops, tech demos, and collaborative innovation sessions",
        },
        {
          icon: <FaClipboardList />,
          title: "Industry Interactions",
          description: "Meet tech leaders, attend seminars, and participate in panel discussions",
        },
        {
          icon: <FaUtensils />,
          title: "Cultural Experience",
          description: "Local cuisine, garden city tours, and traditional experiences",
        },
        {
          icon: <FaTrophy />,
          title: "Knowledge Synthesis",
          description: "Team reflection sessions, learning consolidation, and action planning",
        },
      ],
      benefits: [
        "Exposure to cutting-edge technology",
        "Innovation mindset development",
        "Tech industry networking",
        "Best practices learning",
        "Future-ready skill development",
      ],
      testimonial: {
        quote:
          "Bangalore showed us the future of technology. Our team returned with fresh perspectives and innovative ideas.",
        author: "Deepak Patel, CTO at FutureTech Solutions",
      },
    },
    kerala: {
      title: "Kerala Backwaters Corporate Retreat",
      description:
        "Explore God's Own Country with backwaters, hill stations, and spice plantations. Perfect for team retreats in nature.",
      image: kerala,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Plan your 4-day Kerala retreat with houseboat and hill station experiences",
        },
        {
          icon: <FaUsers />,
          title: "Nature Immersion",
          description: "Backwater cruise, spice plantation tours, and nature walks",
        },
        {
          icon: <FaClipboardList />,
          title: "Wellness Activities",
          description: "Ayurvedic treatments, yoga sessions, and meditation workshops",
        },
        {
          icon: <FaUtensils />,
          title: "Cultural Discovery",
          description: "Traditional Kerala cuisine, cultural performances, and local interactions",
        },
        {
          icon: <FaMountain />,
          title: "Hill Station Experience",
          description: "Tea plantation visits, mountain activities, and scenic team building",
        },
        {
          icon: <FaGlassCheers />,
          title: "Reflection & Departure",
          description: "Team reflection by the backwaters and peaceful departure",
        },
      ],
      benefits: [
        "Deep relaxation in natural environment",
        "Wellness and health focus",
        "Cultural appreciation and learning",
        "Stress reduction through nature therapy",
        "Enhanced team bonding in serene settings",
        "Mindfulness and reflection in tranquil waterscapes"
      ],
      testimonial: {
        quote:
          "Kerala's natural beauty provided the perfect environment for our team to reconnect and recharge. Truly transformative.",
        author: "Kavitha Menon, HR Director at WellnessCorp",
      },
    },
    rajasthan: {
      title: "Rajasthan Royal Heritage Experience",
      description:
        "Experience royal heritage and desert landscapes. Ideal for cultural immersion and leadership workshops.",
      image: rajasthan,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Plan your 5-day royal Rajasthan experience with palace accommodations",
        },
        {
          icon: <FaUsers />,
          title: "Heritage Exploration",
          description: "Palace tours, fort visits, and royal architecture appreciation",
        },
        {
          icon: <FaClipboardList />,
          title: "Leadership Workshops",
          description: "Leadership lessons from royal history and strategic thinking sessions",
        },
        {
          icon: <FaUtensils />,
          title: "Cultural Immersion",
          description: "Royal cuisine experiences, folk performances, and traditional crafts",
        },
        {
          icon: <FaMountain />,
          title: "Desert Adventure",
          description: "Camel safari, desert camping, and team challenges in unique terrain",
        },
        {
          icon: <FaTrophy />,
          title: "Royal Celebration",
          description: "Grand farewell dinner in palace setting and achievement recognition",
        },
      ],
      benefits: [
        "Leadership inspiration from royal history",
        "Cultural richness and heritage appreciation",
        "Unique desert team building experiences",
        "Luxury and comfort in royal settings",
        "Historical perspective on leadership and strategy",
        "Creative stimulation from vibrant arts and architecture"
      ],
      testimonial: {
        quote:
          "Rajasthan taught us about leadership, heritage, and teamwork in the most magnificent setting. An unforgettable experience.",
        author: "Ravi Agarwal, Managing Director at Heritage Industries",
      },
    },
  },
  

  "conferences": {
    "tech-summit": {
      
      title: "Tech Summit",
      description: "A deep dive into future technologies with talks, demos, and networking sessions.",
      image: tech,
      steps: [
        { icon: <FaCalendarCheck />, title: "Schedule Planning", description: "Set agenda and invite keynote speakers from the industry." },
        { icon: <FaUsers />, title: "Registration & Welcome", description: "Participants receive kits and badges upon arrival." },
        { icon: <FaInfoCircle />, title: "Keynote & Panels", description: "Technology leaders present insights on AI, Cloud, and DevOps." },
        { icon: <FaClipboardList />, title: "Workshops", description: "Hands-on sessions for participants to learn and network." },
        { icon: <FaSmile />, title: "Closing Ceremony", description: "Event wrap-up with awards and networking dinner." }
      ],
      benefits: [
        "Latest industry insights",
        "Skill development",
        "Tech networking opportunities"
      ],
      testimonial: {
        quote: "The Tech Summit gave us clarity on tech trends and was a great learning platform.",
        author: "Shruti Nair, CTO, NovaTech"
      }
    },
    "leadership-summit": {
      title: "Leadership Summit",
      description: "Empowering corporate leaders through inspiring talks and strategic discussions.",
      image: leadership,
      steps: [
        { icon: <FaUsers />, title: "Leader Gathering", description: "Top executives join to align on future strategy." },
        { icon: <FaClipboardList />, title: "Vision Sharing", description: "Presentations on innovation, change management, and growth." },
        { icon: <FaInfoCircle />, title: "Panel Talks", description: "Interactive discussions with successful leaders from various sectors." },
        { icon: <FaSmile />, title: "Networking Sessions", description: "Private roundtables and breakout groups for strategy exchange." }
      ],
      benefits: [
        "Leadership skill refinement",
        "High-level collaboration",
        "Strategic growth alignment"
      ],
      testimonial: {
        quote: "The sessions sparked strategic ideas we’ve already begun implementing. A must-attend event!",
        author: "Rajeev Menon, VP Strategy, Innoventix"
      }
    },
    "hr-conclave": {
      title: "HR Conclave",
      description: "Enabling HR professionals to drive engagement, retention, and well-being.",
      image: hr,
      steps: [
        { icon: <FaClipboardList />, title: "Opening Session", description: "Kick-off with a keynote on employee well-being post-pandemic." },
        { icon: <FaUsers />, title: "Workshops", description: "Interactive sessions on talent retention and performance management." },
        { icon: <FaInfoCircle />, title: "Case Study Presentations", description: "Learn from successful HR initiatives across industries." },
        { icon: <FaSmile />, title: "Recognition Ceremony", description: "Top HR professionals recognized for innovation and impact." }
      ],
      benefits: [
        "HR community learning",
        "Inspiration for employee programs",
        "Elevated HR practices"
      ],
      testimonial: {
        quote: "The HR Conclave energized our entire team with fresh ideas and motivation.",
        author: "Anita Kulkarni, Head of HR, PeopleFirst"
      }
    }
  },













"social-activities": {
    "beach-cleanup": {
      title: "Beach Cleanup Drive",
      description: "Make a positive environmental impact through a collaborative beach cleanup activity.",
      image: beach,
      steps: [
        { icon: <FaCalendarCheck />, title: "Date Finalization", description: "Choose a convenient weekend or weekday morning for the cleanup." },
        { icon: <FaUsers />, title: "Volunteer Sign-up", description: "Create a registration list for participants and assign safety responsibilities." },
        { icon: <FaClipboardList />, title: "Briefing", description: "Provide safety instructions and cleanup guidelines." },
        { icon: <FaMapMarkerAlt />, title: "Cleanup Activity", description: "Teams clean assigned beach zones with gloves and biodegradable bags." },
        { icon: <FaMedal />, title: "Waste Collection & Segregation", description: "Collected waste is weighed, sorted, and documented for transparency." },
        { icon: <FaSmile />, title: "Team Photo & Wrap-up", description: "Wrap up with a group photo and refreshments." }
      ],
      benefits: [
        "Boosts environmental awareness",
  "Promotes CSR values",
  "Encourages teamwork",
  "Builds a positive brand image",
  "Improves physical well-being through active participation",
  "Fosters community engagement and local pride"
      ],
      testimonial: {
        quote: "This initiative helped our team connect while doing something meaningful for the environment.",
        author: "Ramesh Iyer, Operations Manager, GreenSphere"
      }
    },
    "tree-plantation": {
      title: "Tree Plantation",
      description: "Contribute to a greener future through an organized tree plantation activity.",
      image: plants,
      steps: [
        { icon: <FaCalendarCheck />, title: "Location Finalization", description: "Choose a school, park, or open community ground for plantation." },
        { icon: <FaClipboardList />, title: "Tree Allocation", description: "Assign trees and areas to teams." },
        { icon: <FaUsers />, title: "Plantation Activity", description: "Teams plant trees using provided tools and organic fertilizers." },
        { icon: <FaInfoCircle />, title: "Awareness Session", description: "Conclude with an awareness talk by an environmentalist." },
        { icon: <FaSmile />, title: "Certificate Distribution", description: "Distribute participation certificates and click a team photo." }
      ],
      benefits: [
        "Supports sustainability",
        "Instills responsibility",
        "Encourages team unity"
      ],
      testimonial: {
        quote: "A fulfilling experience for the entire team and a step toward a greener tomorrow!",
        author: "Neha Joshi, Sustainability Officer, GoGreen Pvt. Ltd."
      }
    },
    "blood-donation": {
      title: "Blood Donation Camp",
      description: "A life-saving initiative encouraging employees to give back through blood donation.",
      image: blood,
      steps: [
        { icon: <FaCalendarCheck />, title: "Collaboration", description: "Partner with a certified blood bank and set the date." },
        { icon: <FaUsers />, title: "Donor Registration", description: "Volunteers register and go through a health screening." },
        { icon: <FaClipboardList />, title: "Medical Setup", description: "Set up the donation area with professional equipment and staff." },
        { icon: <FaSmile />, title: "Donation & Snacks", description: "Employees donate and enjoy post-donation refreshments." },
        { icon: <FaMedal />, title: "Appreciation Certificates", description: "Distribute thank-you cards and e-certificates." }
      ],
      benefits: [
        "Promotes empathy and care",
        "Builds corporate goodwill",
        "Improves employee morale"
      ],
      testimonial: {
        quote: "Knowing I helped someone in need gave me immense pride. Great initiative by the company!",
        author: "Amit Desai, Analyst, CareComp Systems"
      }
    }
  },

  "cultural-events": {
    "cultural-cuisine-day": {
      title: "Cultural Cuisine Day",
      description: "Celebrate diverse cultures by sharing and tasting traditional dishes from around the world.",
      image: cuisine,
      steps: [
        {
          icon: <FaUtensils />,
          title: "Plan the Menu",
          description: "Gather traditional recipes and organize dishes representing various cultures."
        },
        {
          icon: <FaUsers />,
          title: "Team Participation",
          description: "Encourage team members to cook or bring dishes from their cultural background."
        },
        {
          icon: <FaClipboardList />,
          title: "Setup",
          description: "Arrange a buffet-style table showcasing the diverse cuisines."
        },
        {
          icon: <FaSmile />,
          title: "Tasting & Sharing",
          description: "Enjoy food together while sharing stories and cultural significance."
        },
        {
          icon: <FaMedal />,
          title: "Recognition",
          description: "Appreciate culinary efforts with fun awards and recognitions."
        }
      ],
      benefits: [
        "Fosters cultural understanding",
        "Promotes team bonding",
        "Encourages creativity",
        "Expands culinary horizons"
      ],
      testimonial: {
        quote: "The Cultural Cuisine Day brought our team closer and broadened our appreciation for different cultures.",
        author: "Neha Gupta, Diversity Manager at GlobalTech"
      }
    },

    "themed-costume-day": {
      title: "Themed Costume Day",
      description: "A day to dress up in themed costumes representing various cultures or historical periods.",
      image: costume,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Theme Announcement",
          description: "Select and announce the costume theme well in advance."
        },
        {
          icon: <FaUsers />,
          title: "Costume Preparation",
          description: "Team members prepare costumes representing the theme."
        },
        {
          icon: <FaSmile />,
          title: "Event Day",
          description: "Wear costumes and participate in themed activities."
        },
        {
          icon: <FaMedal />,
          title: "Contest & Awards",
          description: "Host a costume contest with prizes for creativity and authenticity."
        }
      ],
      benefits: [
        "Boosts creativity",
        "Enhances team spirit",
        "Encourages cultural exploration",
        "Creates lasting memories"
      ],
      testimonial: {
        quote: "Themed Costume Day was a huge hit! It was fun, creative, and really energized the team.",
        author: "Karan Singh, Event Coordinator at InnovatePlus"
      }
    },

    "music-and-dance-festival": {
      title: "Music and Dance Festival",
      description: "Celebrate cultural diversity through music and dance performances by team members.",
      image: music,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Performance Signup",
          description: "Invite team members to sign up for performances."
        },
        {
          icon: <FaUsers />,
          title: "Rehearsals",
          description: "Schedule practice sessions and assist performers."
        },
        {
          icon: <FaSmile />,
          title: "Festival Day",
          description: "Enjoy diverse performances showcasing cultural heritage."
        },
        {
          icon: <FaMedal />,
          title: "Appreciation",
          description: "Celebrate performers with awards and recognition."
        }
      ],
      benefits: [
        "Promotes cultural expression",
        "Builds confidence",
        "Encourages teamwork",
        "Enhances morale"
      ],
      testimonial: {
        quote: "The Music and Dance Festival was vibrant and inspiring – a true celebration of our team's talents.",
        author: "Anjali Rao, HR Manager at UnityWorks"
      }
    },

    "folklore-sessions": {
      title: "Folklore Sessions",
      description: "Engage with traditional stories and folklore from different cultures, fostering cultural appreciation.",
      image: folk,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Session Planning",
          description: "Arrange storytellers or prepare folklore content."
        },
        {
          icon: <FaUsers />,
          title: "Team Gathering",
          description: "Invite teams to attend the storytelling sessions."
        },
        {
          icon: <FaSmile />,
          title: "Storytelling",
          description: "Share engaging folklore stories with interactive discussions."
        },
        {
          icon: <FaMedal />,
          title: "Reflection",
          description: "Discuss lessons and cultural significance."
        }
      ],
      benefits: [
        "Enhances cultural knowledge",
        "Stimulates imagination",
        "Improves listening skills",
        "Fosters team discussion"
      ],
      testimonial: {
        quote: "Folklore Sessions gave us a unique window into different cultures and strengthened our team bonds.",
        author: "Vikram Patel, Training Lead at CultureFirst"
      }
    },

    "traditional-food-festival": {
      title: "Traditional Food Festival",
      description: "An immersive event where teams explore and enjoy traditional foods from various regions.",
      image: food,
      steps: [
        {
          icon: <FaUtensils />,
          title: "Food Selection",
          description: "Curate a diverse menu of traditional dishes."
        },
        {
          icon: <FaUsers />,
          title: "Cultural Presentations",
          description: "Provide information on the origin and significance of each dish."
        },
        {
          icon: <FaSmile />,
          title: "Festival Enjoyment",
          description: "Enjoy tasting and cultural exchange."
        },
        {
          icon: <FaMedal />,
          title: "Feedback & Awards",
          description: "Recognize the best presentations and most popular dishes."
        }
      ],
      benefits: [
        "Deepens cultural understanding",
        "Encourages openness to new experiences",
        "Enhances social interaction",
        "Builds appreciation for diversity"
      ],
      testimonial: {
        quote: "The Traditional Food Festival was a delightful experience that brought our team together around the table.",
        author: "Sunita Das, Diversity Officer at FoodieCorp"
      }
    },

    "heritage-walks": {
      title: "Heritage Walks",
      description: "Guided walks through historical sites to connect teams with local culture and history.",
      image: heritage,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Route Planning",
          description: "Select heritage sites relevant to the team’s interests."
        },
        {
          icon: <FaUsers />,
          title: "Group Assembly",
          description: "Organize participants for the walk."
        },
        {
          icon: <FaSmile />,
          title: "Guided Tour",
          description: "Engage with expert guides sharing stories and history."
        },
        {
          icon: <FaMedal />,
          title: "Reflection Session",
          description: "Discuss learnings and experiences post-walk."
        }
      ],
      benefits: [
        "Promotes cultural awareness",
        "Encourages physical activity",
        "Strengthens team connections",
        "Provides educational value"
      ],
      testimonial: {
        quote: "Heritage Walks connected us to our roots and helped build stronger team relationships.",
        author: "Rohit Sharma, Team Manager at HeritageCo"
      }
    }
  },


"weekend-outings": {
    "nature-hiking": {
      title: "Nature Hiking",
      description: "Refreshing hiking experience in scenic locations to rejuvenate and build team connections",
      image: hiking,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Book your preferred hiking date and select difficulty level"
        },
        {
          icon: <FaUsers />,
          title: "Group Formation",
          description: "Organize hiking groups based on fitness levels and preferences"
        },
        {
          icon: <FaClipboardList />,
          title: "Safety Briefing",
          description: "Essential safety guidelines, equipment check, and route overview"
        },
        {
          icon: <FaHiking />,
          title: "Hiking Adventure",
          description: "Guided hiking experience with team challenges along the trail"
        },
        {
          icon: <FaMountain />,
          title: "Summit Activities",
          description: "Reach the destination with team building activities and photo sessions"
        },
        {
          icon: <FaGlassCheers />,
          title: "Celebration",
          description: "Refreshments and reflection session celebrating the achievement"
        }
      ],
      benefits: [
        "Stress relief in nature",
        "Physical fitness boost",
        "Team bonding in natural settings",
        "Mental wellness and clarity",
        "Shared accomplishment feeling",
        "Rejuvenation through adventure"
      ],
      testimonial: {
        quote: "The hiking trip was exactly what our team needed after a stressful quarter. The beautiful scenery and physical activity really brought us together.",
        author: "Vikram Singh, Project Manager at GlobalTech"
      }
    },
    "beach-retreat": {
      title: "Beach Retreat",
      description: "Relaxing beach getaway with team activities, water sports, and bonfire sessions",
      image: bbeach,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Book your weekend retreat dates and accommodation preferences"
        },
        {
          icon: <FaUsers />,
          title: "Team Check-in",
          description: "Welcome session and room assignments for all participants"
        },
        {
          icon: <FaUmbrellaBeach />,
          title: "Beach Activities",
          description: "Beach volleyball, sandcastle building, and team games"
        },
        {
          icon: <FaSwimmer />,
          title: "Water Sports",
          description: "Swimming, water volleyball, and other aquatic team activities"
        },
        {
          icon: <FaFire />,
          title: "Bonfire Session",
          description: "Evening bonfire with team discussions and entertainment"
        },
        {
          icon: <FaMusic />,
          title: "Farewell",
          description: "Closing ceremony and departure with renewed team spirit"
        }
      ],
      benefits: [
        "Complete relaxation in beach environment",
        "Vitamin D boost from natural sunlight",
        "Team coordination through beach games",
        "Open communication in informal settings",
        "Work-life balance perspective"
      ],
      testimonial: {
        quote: "Our beach retreat transformed our team dynamics completely. The informal setting allowed people to connect on a personal level we hadn't achieved in the office.",
        author: "Neha Kapoor, HR Manager at InnovaSolutions"
      }
    },
    "adventure-park": {
      title: "Adventure Park",
      description: "Thrilling adventure park experience with zip-lining, rock climbing, and team challenges",
      image: park,
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Book your adventure day and select activity packages"
        },
        {
          icon: <FaUsers />,
          title: "Safety Training",
          description: "Comprehensive safety briefing and equipment fitting session"
        },
        {
          icon: <FaTree />,
          title: "Zip-lining",
          description: "Exciting zip-line adventures building trust and confidence"
        },
        {
          icon: <FaMountain />,
          title: "Rock Climbing",
          description: "Team rock climbing challenges with mutual support and encouragement"
        },
        {
          icon: <FaChess />,
          title: "Team Challenges",
          description: "Obstacle courses and problem-solving activities"
        },
        {
          icon: <FaTrophy />,
          title: "Victory Celebration",
          description: "Achievement celebration with refreshments and team photos"
        }
      ],
      benefits: [
        "Adrenaline rush from exciting activities",
        "Trust building through mutual support",
        "Confidence boost from overcoming fears",
        "Goal achievement as a team",
        "Shared victories and accomplishments"
      ],
      testimonial: {
        quote: "The adventure park day was transformative for our team. Seeing colleagues help each other overcome challenges created a level of trust we've never had before.",
        author: "Arjun Mehta, CTO at TechInnovate"
      }
    }
  }

};

export default function EventFlow() {
  const { serviceId, eventId } = useParams();
  const navigate = useNavigate();
  

  const eventFlow = eventFlowData[serviceId]?.[eventId];
  
  useEffect(() => {
 
    const steps = document.querySelectorAll(`.${styles.processStep}`);
    steps.forEach((step, index) => {
      setTimeout(() => {
        step.classList.add(styles.animate);
      }, 300 * index);
    });
    

    const benefits = document.querySelectorAll(`.${styles.benefitItem}`);
    benefits.forEach((benefit, index) => {
      setTimeout(() => {
        benefit.classList.add(styles.animate);
      }, 200 * index);
    });
  }, []);
  
  if (!eventFlow) {
    return (
      <div className={styles.errorContainer}>
        <h2>Event information not found</h2>
        <button 
          className={styles.backButton} 
          onClick={() => navigate(`/services/${serviceId}`)}
        >
          <FaArrowLeft /> Back to {serviceId.replace(/-/g, ' ')}
        </button>
      </div>
    );
  }

  return (
    <div className={styles.eventFlowPage}>
      {/* Back Navigation */}
      <div className={styles.backNavigation}>
        <div className={styles.container}>
          <button 
            className={styles.backButton} 
            onClick={() => navigate(`/services/${serviceId}`)}
          >
            <FaArrowLeft /> Back to {serviceId.replace(/-/g, ' ')}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${eventFlow.image})` }}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>{eventFlow.title}</h1>
          <p className={styles.heroSubtitle}>{eventFlow.description}</p>
        </div>
      </section>

      {/* Process Flow */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionSubtitle}>
            Follow our proven process to deliver an exceptional {eventFlow.title} experience
          </p>

          <div className={styles.processFlowTimeline}>
            {eventFlow.steps.map((step, index) => (
              <div key={index} className={`${styles.processStep} ${index % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.stepContent}>
                  <div className={styles.stepIconContainer}>
                    <div className={styles.stepIcon}>{step.icon}</div>
                  </div>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  {index < eventFlow.steps.length - 1 && (
                    <div className={styles.stepArrow}>
                      <FaArrowRight />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Benefits</h2>
          <p className={styles.sectionSubtitle}>
            Why {eventFlow.title} is great for your team
          </p>

          <div className={styles.benefitsList}>
            {eventFlow.benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                <div className={styles.benefitCheck}>✓</div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className={styles.testimonial}>
            <blockquote className={styles.testimonialQuote}>
              "{eventFlow.testimonial.quote}"
            </blockquote>
            <p className={styles.testimonialAuthor}>— {eventFlow.testimonial.author}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Book Your {eventFlow.title}?</h2>
          <p className={styles.ctaDescription}>
            Contact us today to schedule this event for your team
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.primaryButton}>
              Book Now
            </Link>
            <Link to={`/services/${serviceId}`} className={styles.secondaryButton}>
              Explore Other Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

