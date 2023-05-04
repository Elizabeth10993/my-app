import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
      <div>
      {/* 
        <motion.img
        width={'20%'}
        src='/img/1.jpeg'
        alt=''

          //анимация
          animate={{rotate:360}}
          transition={{
            delay:2,
            duration: 5,
            repeat: Infinity,
            repeatDelay: 0.5,
            repeatType: 'reverse',
            type: 'inertia'
          }}
          />

          <motion.p
          initial={{
            x:-1000,
            opacity:0
          }}

          animate={{
            x: 500,
            opacity: 1
          }}

          transition={{
            delay:1,
            duration: 2,
            type: 'tween'
          }}

          >
             Текст который появится
          </motion.p> */}</div>

      <motion.div id='div1'
        initial={{
          x: -1000,
          opacity: 1
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}

        transition={{
          delay: 1,
          duration: 2
        }}
        >Путешествия — это терапия для души.</motion.div>

        <motion.div id='div2'
        initial={{
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          delay:1,
          duration:2
        }}>
          <motion.img
          src='img/photo3.jpeg'
          className='photo'
          width={350}

          initial={{
            opacity:0.6
          }}

          transition={{
            duration:5
          }}

          whileTap={{rotate:360}}/>

        </motion.div>

        <div id='divImg'>
        <motion.div id='div3'
        initial={{
          opacity: 0,
          scale:0.5
        }}

        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration:2
        }}>
          <motion.img
          src='img/globe1.jpeg'
          className='globe'
          width={200}

          initial={{
            opacity:0.6
          }}

          transition={{
            duration:5
          }}

          whileHover={{
            scale:1.5,
            transition:{
              duration:1
            }
            }}
            whileTap={{rotate:360}}/>
        </motion.div>

        <motion.button className='btn btn-primary'
        whileHover={{
          scale:1.2
        }}>
        Нажми
        </motion.button>
        </div>
    </div>
  )
}

export default Description