import { createRouter, createWebHistory } from 'vue-router'
import BoardPage from '@/pages/BoardPage.vue'
import EventsPage from '@/pages/EventsPage.vue'
import GalleryPage from '@/pages/GalleryPage.vue'
import HistoryPage from '@/pages/HistoryPage.vue'
import ClubLanding from '@/pages/LandingPage.vue'
import MatchesOverviewPage from '@/pages/matches/MatchesOverviewPage.vue'
import NewsPage from '@/pages/NewsPage.vue'
import TeamPage from '@/pages/TeamPage.vue'
import TrainingPage from '@/pages/TrainingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: ClubLanding },
    { path: '/news', name: 'news', component: NewsPage },
    { path: '/historie', name: 'historie', component: HistoryPage },
    { path: '/spiele', name: 'spiele', component: MatchesOverviewPage },
    { path: '/vorstand', name: 'vorstand', component: BoardPage },
    { path: '/training', name: 'training', component: TrainingPage },
    { path: '/mannschaft', name: 'mannschaft', component: TeamPage },
    { path: '/termine', name: 'termine', component: EventsPage },
    { path: '/galerie', name: 'galerie', component: GalleryPage },
  ],
})

export default router
