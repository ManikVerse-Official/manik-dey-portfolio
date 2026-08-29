# Projects Assets

Each project should have its own folder with the following structure:

## Project Folder Structure
```
project-name/
├── cover.jpg          # Main project cover image
├── demo.mp4          # Optional demo video
├── screenshot-1.jpg  # Project screenshot 1
├── screenshot-2.jpg  # Project screenshot 2
└── ...               # Additional screenshots
```

## Supported Formats
- Images: JPG, JPEG, PNG, SVG, WebP
- Videos: MP4, WebM

## Adding a New Project

1. Create a new folder in this directory:
   ```
   public/assets/projects/your-project-name/
   ```

2. Add your project assets:
   - `cover.jpg` (required for project card)
   - `demo.mp4` (optional, for project modal)
   - `screenshot-1.jpg`, `screenshot-2.jpg`, etc. (optional)

3. Add the project to `src/data/projects.js`:
   ```javascript
   {
     id: "your-project-name",
     title: "Your Project Title",
     shortDescription: "Brief description",
     fullDescription: "Detailed description",
     category: "Web Application",
     technologies: ["React", "Node.js", "MongoDB"],
     image: "/assets/projects/your-project-name/cover.jpg",
     video: "/assets/projects/your-project-name/demo.mp4",
     screenshots: [
       "/assets/projects/your-project-name/screenshot-1.jpg",
       "/assets/projects/your-project-name/screenshot-2.jpg"
     ],
     github: "https://github.com/yourusername/repo",
     liveDemo: "https://yourproject.com",
     featured: true,
     features: ["Feature 1", "Feature 2"],
     role: "Your Role",
     outcome: "Project outcome description"
   }
   ```

## Existing Projects
- `micodem/` - AI-assisted desktop code editor
- `linkmanager/` - Cross-platform link management tool
- `fullstack/` - Full-stack web application
