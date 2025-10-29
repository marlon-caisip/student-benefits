<div align="center">
  <img src="src/assets/img/logo/main-sub.png" alt="Student Benefits Hub Logo" width="200"/>
  
  # Student Benefits Hub

  Ever wonder what your .edu email is *really* worth? It's not just for logging into the school portal. It's basically a key to thousands of dollars in free software, cloud credits, and pro tools. This project is a place to help students find and claim all the free stuff they can get with their school email.
</div>

---

## 🎯 What is this?

The Student Benefits Hub is pretty much a big list of freebies and discounts for students. I've focused a lot on the GitHub Student Developer Pack, but I'm adding other stuff too. I made it to help students like us find everything from cloud hosting and AI tools to design software and productivity apps—all for free or super cheap.

On the site, you'll find:

  - **Over 100 student benefits** sorted by type (Dev Tools, Cloud, AI, Design, etc.)
  - **Step-by-step guides** on how to actually claim the benefits without getting lost.- **Tutorials** to get the most out of the best perks (like using DigitalOcean to host your portfolio).
  - **"Maximize" guides** that give you practical ideas for using this stuff in real projects.

## 💡 Why did I build this?

I built this because I almost missed out on so many free tools in my first year. The GitHub Student Developer Pack *alone* is just worth a crazy amount (like over $200k in credits my friend), but a lot of students don't even know it exists or just get stuck trying to sign up.

All the info was scattered everywhere, explained complicated in docs, or hidden behind confusing applications. I just wanted one single spot where students could:

  - See all the free stuff in one list.
  - Know what each thing *actually* does.
  - Get clear, simple steps to claim it.- Figure out how to use this stuff for school or personal projects.

It’s disappointing to pay for something when you could’ve gotten it for free. This site is just here to make sure we all get the free stuff we're entitled to.

## 🤝 How can you help?

This whole project is open source, and I'd appreicate some help\! If you want to contribute, here are a few ways you can make this site better for everyone:

### 1\. Add New Benefits

Find a student perk that's missing? Go ahead and add it to `src/data/benefitsData.ts`. Just follow the same format and make sure to add:

  - The name and a quick description.
  - The direct link to the student offer page (not the homepage\!).
  - A link to the logo if you can find one.
  - Any catches or "gotchas" (like "US students only" or "requires credit card").

### 2\.Update Existing Information

Things change all the time. Offers end, links break, or sign-up steps get updated. If you see something that's wrong:

  - Just update the info in the data files.
  - Fix any broken links you find.
  - Tweak the claiming instructions if the process is different now.
  
  ### 3\. Write Maximize Guides

Did you use one of these benefits to build something cool? Share what you learned\! Write a new guide component. Show other students how to:

  - Deploy a project with cloud credits.
  - Build a portfolio with the free tools.
  - Set up automations with free services.
  - Make designs with the pro software.

Check out the DigitalOcean guide to see the kind of format that helps.

### 4\. Improve the Code

If you're a coder, I always appreciate tech improvements:

  - Make components run faster.
  - Add more tests.
  - Help with accessibility (a11y).
  - Improve the look or feel (UI/UX).- Fix any bugs you spot.

### 5\. Share Your Story

Did this site actually help you save money or build something? Let me know\! It's super motivating to hear success stories, and it shows other students that this is worth their time.

## 🛠️ Tech Stack

I built this with some modern tech to keep it fast and easy to work on:

  - **React 19** & TypeScript for type safety
  - **Vite** (because it's so fast)
  - **Tailwind CSS** (pulled from a CDN to keep it simple)
  - **GSAP** for some of the scroll animations
  - **Vitest** & Testing Library for testing
  - **React Router** for navigation
  - **Lucide React** for icons

I tried to keep the setup really simple. Most of the benefits are just stored in data files (`.ts` files in `/data`), so you can add or update stuff without having to dig through a bunch of React code.

## 🚀 Getting Started (For Contributors)

If you want to run this on your own machine and make changes, follow these steps:

```bash
# Clone the repository
git clone https://github.com/marlon-caisip/student-benefits.git
cd student-benefits

# Install dependencies
npm install

# Start the development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

The site should pop up at `http://localhost:5173`. It uses hot module reloading, so any changes you make will show up right away without a refresh.

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── BenefitCard.tsx
│   ├── BenefitsSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── MaximizeSection.tsx
│   ├── ScrollToTop.tsx
│   └── guides/          # Step-by-step tutorial guides
│       ├── AIChatbotGuide.tsx
│       ├── ClaimingGuide.tsx
│       └── DigitalOceanGuide.tsx
├── data/                # Benefit data and content
│   ├── benefitsData.ts
│   ├── claimingGuideData.ts
│   └── maximizeGuidesData.ts
├── pages/               # Page-level components
│   └── MaximizePage.tsx
├── types/               # TypeScript type definitions
│   └── index.ts
├── tests/               # Test files
├── App.tsx              # Main app with routing
└── main.tsx             # Application entry point
```

To add a new benefit, just edit the files in `src/data/`. If you want to add a whole new guide page, you'll need to make a new component in `src/components/guides/` and then add it to the routes in `App.tsx`.

## 📋 Contributing Guidelines

1.  **Keep it simple:** The site should be easy for any student to use, even non-tech majors.
2.  **Be accurate:** Please double-check your links and the requirements before you add a new benefit.
3.  **Write normally:** Write like you're explaining it to a 5 year old kid, not everyone learns the same way.
4.  **Test your work:** Run `npm test` and click around to make sure nothing broke.
5.  **Focus on students:** Only add perks that are *actually* useful and available to students.

## 💬 Questions or Issues?

Got questions or run into a problem? Just open an issue on [GitHub](https://github.com/marlon-caisip/student-benefits) or email me at marlon.caisip@cbsua.edu.ph. Whether it's a bug, an idea, or you need help (wag lang pera), I'm happy to help.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

-----

**Remember:** Your .edu email is more valuable than you think. Make the most of it while you can\!🎓✨