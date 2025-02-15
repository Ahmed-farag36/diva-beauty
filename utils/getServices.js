// utils/getServices.js
import fs from 'fs';
import path from 'path';

export const getServices = () => {
  const servicesDirectory = path.join(process.cwd(), 'content/services');
  const filenames = fs.readdirSync(servicesDirectory);
  
  const services = filenames.map((filename) => {
    const filePath = path.join(servicesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  });

  return services;
};

export const getGroupedServices = (services) => {
  return services.reduce((acc, service) => {
    const category = service.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {});
};

