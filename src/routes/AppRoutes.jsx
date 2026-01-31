import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/Landing/LandingPage';
import Level0Page from '../pages/Level0/Level0Page';
import Level0DetailsPage from '../pages/Level0Details/Level0DetailsPage';
import CampPage from '../pages/Camp/CampPage';
import ContestsPage from '../pages/Contests/ContestsPage';
import CodeforcesPage from '../pages/Codeforces/CodeforcesPage';
import CampDetailsPage from '../pages/CampDetails/CampDetailsPage';
import CampProgressPage from '../pages/CampProgress/CampProgressPage';
import AllAboutPSPage from '../pages/AllAboutPS/AllAboutPSPage';
import CodeforcesGuidePage from '../pages/CodeforcesGuide/CodeforcesGuidePage';
import HowToSolvePage from '../pages/HowToSolve/HowToSolvePage';
import NewcomersGuidePage from '../pages/NewcomersGuide/NewcomersGuidePage';
import ECPCPage from '../pages/ECPC/ECPCPage';
import SheetsPage from '../pages/Sheets/SheetsPage';
import QuizzesPage from '../pages/Quizzes/QuizzesPage';
import GroupsPage from '../pages/Groups/GroupsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/level0" element={<Level0Page />} />
      <Route path="/level0/:topicId" element={<Level0DetailsPage />} />
      <Route path="/camp" element={<CampPage />} />
      <Route path="/camp-details" element={<CampDetailsPage />} />
      <Route path="/camp-progress" element={<CampProgressPage />} />
      <Route path="/contests" element={<ContestsPage />} />
      <Route path="/codeforces" element={<CodeforcesPage />} />
      <Route path="/all-about-ps" element={<AllAboutPSPage />} />
      <Route path="/codeforces-guide" element={<CodeforcesGuidePage />} />
      <Route path="/how-to-solve" element={<HowToSolvePage />} />
      <Route path="/newcomers-guide" element={<NewcomersGuidePage />} />
      <Route path="/ecpc" element={<ECPCPage />} />
      <Route path="/sheets" element={<SheetsPage />} />
      <Route path="/quizzes" element={<QuizzesPage />} />
      <Route path="/groups" element={<GroupsPage />} />
    </Routes>
  );
};

export default AppRoutes;