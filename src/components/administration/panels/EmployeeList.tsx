import List from '@mui/material/List'
import { AnimatePresence, motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { paginatedEmplListAtom } from '../../../recoil-state'
import Individual from './Individual'

export default function EmployeeList() {
  const paginatedEmplList = useRecoilValue(paginatedEmplListAtom)

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  // const employee = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1
  //   },
  //   exit: { opacity: 0 }
  // }

  return (
    <List sx={{ p: 0, backgroundColor: 'transparent' }}>
      <AnimatePresence exitBeforeEnter>
        <motion.ul
          variants={container}
          initial='hidden'
          animate='visible'
          style={{ listStyle: 'none', paddingInlineStart: 0 }}>
          {paginatedEmplList.map((empl) => (
            <Individual
              key={empl.id}
              emplId={empl.id}
              emplFirstname={empl.firstname}
              emplLastname={empl.lastname}
              emplRole={empl.role}
              emplEmail={empl.email}
            />
          ))}
        </motion.ul>
      </AnimatePresence>
    </List>
  )
}
