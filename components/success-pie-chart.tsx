'use client'

import { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const data = [
  { name: 'Successful Projects', value: 300, fill: '#3B82F6' },
  { name: 'Satisfied Clients', value: 700, fill: '#06B6D4' },
  { name: 'Expert Team', value: 45, fill: '#10B981' },
  { name: 'Locations', value: 55, fill: '#F59E0B' },
]

const COLORS = ['#3B82F6', '#06B6D4', '#10B981', '#F59E0B']

interface AnimatedPieProps {
  isVisible: boolean
}

export function SuccessPieChart({ isVisible }: AnimatedPieProps) {
  const [animateChart, setAnimateChart] = useState(false)

  useEffect(() => {
    if (isVisible) {
      // Trigger animation after a small delay for smooth effect
      const timer = setTimeout(() => setAnimateChart(true), 100)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <div
      className={`w-full h-96 transition-all duration-1000 transform ${
        animateChart ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            animationDuration={1500}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `${value}`}
            contentStyle={{
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '8px',
              color: '#FFFFFF',
            }}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
