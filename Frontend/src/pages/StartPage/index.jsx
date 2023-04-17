import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css';
import Button from '../../components/Button';
import { motion } from 'framer-motion';

export default function StartPage() {

  const listVariants = {
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 1.2,
        duration: 1.9
      }
    }),
    hidden: { opacity: 0,  }
  };

const items = [
  'Are you in pain?', 
  'Before we can help you, please fill out a simple, anonymous form.',
  'Answer the 36 short questions and the app will recommend the right therapy for you that has been tested by other users.'
];

  return (
  <div>
    <div className={s.start_page}>
        <h2>Wellcome!</h2>
          <div>
            {
              items.map((el, i) => (
                <motion.p
                  key={el}
                  variants = {listVariants}
                  initial = 'hidden'
                  animate = 'visible'
                  custom={i}
                >
                  {el}
                </motion.p>
              ))
            }
          </div>
  
        <Link to='/select_problem'>
        <Button>Let's start</Button>
        </Link>
      
      </div>
    </div>
  )
}
