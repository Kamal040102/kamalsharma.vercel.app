import React from 'react'
import Link from 'next/link'
import styles from '../styles/Work.module.css'

const Footer = () => {
  return (
      <div className={styles.workWidth}>
          <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 text-white px-3 lg:px-32 lg:py-10 bg-gray-900">
              <div className="py-4">
                  <div className="text-3xl py-4">Contact Me</div>
                  <div>Email:
                      <Link href="mailto:kamal5201ks@gmail.com"><span className="text-blue-400 cursor-pointer">kamal5201ks@gmail.com</span></Link>
                  </div>
                  <div>Discord:
                      <Link href="https://discord.com/users/835128382962401280"><span className="text-blue-400 cursor-pointer">Kamal040102#7998</span></Link>
                  </div>
                  <div>Linkedin:
                      <Link href="https://www.linkedin.com/in/kamalsharma05/">
                          <span className="text-blue-400 cursor-pointer">kamalsharma05</span>
                      </Link>
                  </div>
              </div>
              <div className="py-4">
                  <div className="text-3xl py-4">Site Map</div>
                  <div>
                      <Link href="/#AboutMe">
                          <span className="text-blue-400 cursor-pointer">
                              About Me
                          </span>
                      </Link>
                  </div>
                  <div>
                      <Link href="/#MyProjects">
                          <span className="text-blue-400 cursor-pointer">
                              My Projects
                          </span>
                      </Link>
                  </div>
                  <div>
                  <a className="text-blue-400" href="https://drive.google.com/file/d/1NXyG41xnRzxGLQXc-RXYV0f3YTr0qPzA/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                  </div>
              </div>
          </div>
          <div className="grid d-flex justify-center grid-rows-1 grid-cols-1 text-center py-2 text-white px-3 lg:px-32 bg-gray-900">
              <div className="addthis_inline_follow_toolbox">
              </div>
          </div>
      </div>
  )
}

export default Footer