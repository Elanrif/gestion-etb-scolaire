import AppHome from '@/components/app-home'
import AppHomeLayout from '@/layouts/app/app-home-layout'
import React from 'react'

export default function Welcome() {
  return (
      <div className="px-24">
          <AppHomeLayout>
              <AppHome/>
          </AppHomeLayout>
      </div>
  );
}
