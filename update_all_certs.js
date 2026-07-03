const fs = require('fs');
const path = require('path');

const certDir = path.join(__dirname, 'public', 'certificate');
const files = fs.readdirSync(certDir).filter(f => f !== 'desktop.ini' && f !== '.DS_Store' && f.includes('.'));
const imageFiles = files.filter(f => /\.(png|jpe?g|svg|webp)$/i.test(f));

// 1. Update CertificateHeroScroll.tsx
const scrollPath = path.join(__dirname, 'src', 'components', 'sections', 'CertificateHeroScroll.tsx');
let scrollContent = fs.readFileSync(scrollPath, 'utf8');
const newPool = 'const CERTIFICATE_POOL = [\n' + imageFiles.map(f => `    "/certificate/${f}"`).join(',\n') + '\n];';
scrollContent = scrollContent.replace(/const CERTIFICATE_POOL = \[[\s\S]*?\];/, newPool);
fs.writeFileSync(scrollPath, scrollContent, 'utf8');

// 2. Update certificate-marquee.tsx
const marqueePath = path.join(__dirname, 'src', 'components', 'ui', 'certificate-marquee.tsx');
let marqueeContent = fs.readFileSync(marqueePath, 'utf8');
const newCertificates = 'const certificates = [\n' + imageFiles.map(f => `  "/certificate/${f}"`).join(',\n') + '\n];';
marqueeContent = marqueeContent.replace(/const certificates = \[[\s\S]*?\];/, newCertificates);
fs.writeFileSync(marqueePath, marqueeContent, 'utf8');

// 3. Update portfolio.ts
const portfolioPath = path.join(__dirname, 'src', 'data', 'portfolio.ts');
let portfolioContent = fs.readFileSync(portfolioPath, 'utf8');

const generateAchievements = () => {
    return files.map((file, i) => {
        let title = file.replace(/\.(png|jpe?g|pdf|svg)$/i, '').replace(/[-_]/g, ' ');
        let issuer = 'Certification Provider';
        
        if (title.toLowerCase().includes('meshery')) issuer = 'Meshery';
        if (title.toLowerCase().includes('adobe')) issuer = 'Adobe';
        if (title.toLowerCase().includes('google')) issuer = 'Google Cloud';
        if (title.toLowerCase().includes('ssoc')) issuer = 'SSOC';
        if (title.toLowerCase().includes('swoc')) issuer = 'SWOC';
        if (title.toLowerCase().includes('ecwoc')) issuer = 'ECWoC';
        if (title.toLowerCase().includes('oscg')) issuer = 'OSCG';
        if (title.toLowerCase().includes('adk')) issuer = 'ADK';
        if (title.toLowerCase().includes('cloud load') || title.toLowerCase().includes('dataplex') || title.toLowerCase().includes('kubernetes')) issuer = 'Google Cloud';

        return `        {
            id: 'cert-${i + 1}',
            title: '${title}',
            issuer: '${issuer}',
            date: '2025-01-01',
            category: 'certification',
            image: '/certificate/${file}',
        }`;
    }).join(',\n');
};

const newAchievements = `    achievements: [\n${generateAchievements()}\n    ],`;
portfolioContent = portfolioContent.replace(/    achievements: \[[\s\S]*?    \],/, newAchievements);
fs.writeFileSync(portfolioPath, portfolioContent, 'utf8');

console.log('Successfully updated certificates in components and portfolio.ts');
