"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  category: string;
  image: string;
  title: string;
}

const ProjectFilter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = [
    'All',
    'Driveways',
    'Garden Paths',
    'Parking Lots',
    'Commercial Buildings',
    'Government Projects'
  ];

  // Sample project data - replace with your actual images
  const projects: Project[] = [
    // Driveways
    { id: 1, category: 'Driveways', image: '/projects/driveway1.jpg', title: 'Residential Driveway Project 1' },
    { id: 2, category: 'Driveways', image: '/projects/driveway2.jpg', title: 'Modern Driveway Design' },
    { id: 3, category: 'Driveways', image: '/projects/driveway3.jpg', title: 'Premium Driveway Installation' },
    { id: 4, category: 'Driveways', image: '/projects/driveway4.jpg', title: 'Elegant Driveway Solution' },
    
    // Garden Paths
    { id: 5, category: 'Garden Paths', image: '/projects/garden1.jpg', title: 'Beautiful Garden Pathway' },
    { id: 6, category: 'Garden Paths', image: '/projects/garden2.jpg', title: 'Natural Stone Path' },
    { id: 7, category: 'Garden Paths', image: '/projects/garden3.jpg', title: 'Garden Walkway Design' },
    
    // Parking Lots
    { id: 8, category: 'Parking Lots', image: '/projects/parking1.jpg', title: 'Commercial Parking Lot' },
    { id: 9, category: 'Parking Lots', image: '/projects/parking2.jpg', title: 'Large Scale Parking' },
    { id: 10, category: 'Parking Lots', image: '/projects/parking3.jpg', title: 'Parking Area Development' },
    { id: 11, category: 'Parking Lots', image: '/projects/parking4.jpg', title: 'Modern Parking Solution' },
    
    // Commercial Buildings
    { id: 12, category: 'Commercial Buildings', image: '/projects/commercial1.jpg', title: 'Office Complex Project' },
    { id: 13, category: 'Commercial Buildings', image: '/projects/commercial2.jpg', title: 'Retail Center Development' },
    { id: 14, category: 'Commercial Buildings', image: '/projects/commercial3.jpg', title: 'Commercial Plaza' },
    
    // Government Projects
    { id: 15, category: 'Government Projects', image: '/projects/government1.jpg', title: 'Public Infrastructure' },
    { id: 16, category: 'Government Projects', image: '/projects/government2.jpg', title: 'Government Building Project' },
    { id: 17, category: 'Government Projects', image: '/projects/government3.jpg', title: 'Municipal Development' },
    { id: 18, category: 'Government Projects', image: '/projects/government4.jpg', title: 'Public Works Project' },
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="w-full bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop - Horizontal Filter Bar */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Mobile - Dropdown */}
        <div className="md:hidden mb-8">
          <label htmlFor="project-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Filter Projects
          </label>
          <select
            id="project-filter"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {filters.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-green-600 font-semibold mb-1">{project.category}</p>
                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFilter;