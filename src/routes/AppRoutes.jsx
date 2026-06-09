import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home/pages/Home'

// Introduction Page Imports
import Founder from '../pages/Introduction/pages/Founder'
import Preface from '../pages/Introduction/pages/Preface'
import AimsObjectives from '../pages/Introduction/pages/AimsObjectives'
import Administration from '../pages/Introduction/pages/Administration'
import Expenses from '../pages/Introduction/pages/Expenses'
import Profile from '../pages/Introduction/pages/Profile'
import Branches from '../pages/Introduction/pages/Branches'

// Education System Page Imports
import Syllabus from '../pages/EducationSystem/pages/Syllabus'
import Rules from '../pages/EducationSystem/pages/Rules'

// Darul Ifta Page Imports
import NewQuestions from '../pages/DarulIfta/pages/NewQuestions'
import IslamicNames from '../pages/DarulIfta/pages/IslamicNames'
import MasnoonDuas from '../pages/DarulIfta/pages/MasnoonDuas'
import PrayerTimes from '../pages/DarulIfta/pages/PrayerTimes'
import PrayerCalendar from '../pages/DarulIfta/pages/PrayerCalendar'
import QurbaniAbroad from '../pages/DarulIfta/pages/QurbaniAbroad'

// Publications Page Imports
import Bayyinat from '../pages/Publications/pages/Bayyinat'
import Books from '../pages/Publications/pages/Books'

// Contact Page Import
import ContactPage from '../pages/Contact/pages/ContactPage'

// 404 Page Import
import PageNotFound from '../pages/PageNotFound/pages/PageNotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home Route */}
        <Route index element={<Home />} />

        {/* Introduction Module Routes */}
        <Route path="introduction/founder" element={<Founder />} />
        <Route path="introduction/preface" element={<Preface />} />
        <Route path="introduction/objectives" element={<AimsObjectives />} />
        <Route path="introduction/administration" element={<Administration />} />
        <Route path="introduction/expenses" element={<Expenses />} />
        <Route path="introduction/profile" element={<Profile />} />
        <Route path="introduction/branches" element={<Branches />} />

        {/* Education System Module Routes */}
        <Route path="education/syllabus" element={<Syllabus />} />
        <Route path="education/rules" element={<Rules />} />

        {/* Darul Ifta Module Routes */}
        <Route path="darulifta/new-questions" element={<NewQuestions />} />
        <Route path="darulifta/islamic-names" element={<IslamicNames />} />
        <Route path="darulifta/duas" element={<MasnoonDuas />} />
        <Route path="darulifta/prayer-times" element={<PrayerTimes />} />
        <Route path="darulifta/prayer-calendar" element={<PrayerCalendar />} />
        <Route path="darulifta/qurbani" element={<QurbaniAbroad />} />

        {/* Publications Module Routes */}
        <Route path="publications/bayyinat" element={<Bayyinat />} />
        <Route path="publications/books" element={<Books />} />

        {/* Contact Route */}
        <Route path="contact" element={<ContactPage />} />

        {/* Page Not Found Route */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}
