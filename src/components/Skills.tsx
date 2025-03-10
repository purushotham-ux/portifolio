'use client';

import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiServer, FiDatabase, FiTool, FiUsers } from 'react-icons/fi';

const skillsData = [
  {
    icon: <FiCode />,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces with modern frameworks and libraries.',
    skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    icon: <FiServer />,
    title: 'Backend Development',
    description: 'Building robust server-side applications and APIs to power web applications.',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL'],
  },
  {
    icon: <FiDatabase />,
    title: 'Database Management',
    description: 'Designing and optimizing database structures for efficient data storage and retrieval.',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Prisma'],
  },
  {
    icon: <FiLayout />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user experiences that delight users.',
    skills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'User Research', 'Accessibility'],
  },
  {
    icon: <FiTool />,
    title: 'DevOps & Tools',
    description: 'Streamlining development workflows and ensuring smooth deployment processes.',
    skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Vercel', 'Netlify'],
  },
  {
    icon: <FiUsers />,
    title: 'Soft Skills',
    description: 'Complementing technical abilities with essential interpersonal and project skills.',
    skills: ['Communication', 'Problem Solving', 'Time Management', 'Teamwork', 'Adaptability', 'Leadership'],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've acquired a diverse range of skills throughout my career. Here's a comprehensive overview of my technical expertise and capabilities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6 h-full flex flex-col"
            >
              <div className="text-3xl text-primary mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{skill.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.skills.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 