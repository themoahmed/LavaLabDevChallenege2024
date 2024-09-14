# LavaLab Developer Challenge | Fall 2024

This is my attempt at the LavaLab Developer Challenge. The challenge provides a glimpse into how I work and think as a developer, and it also gives me a better idea of the type of development work typically done as a LavaLab developer.

## Tech Stack

I chose to implement the platform on the web using the following technologies:

- **Next.js**: A React framework for server-side rendering and generating static websites.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

## Special Features

### List View and Hover Animations

I implemented a list view and hover animations to enhance the user experience. The list view allows users to see all projects in a tabular format, while the hover animations provide visual feedback when interacting with the project cards.

#### Code References

- List view and hover animations are implemented in the `AllProjects` component:
  ```typescript:src/app/allProjects/page.tsx
  const AllProjects = (props: Props) => {
      ...
      <div className="flex flex-wrap gap-[24px]">
          {activeView === "square" ? (
              projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="w-[323px] h-[297px] p-[24px] rounded-[8px] border-t-[2px] border-[2px] flex flex-col justify-between items-center border-[#CACACA] transition-transform transform hover:scale-105"
                  >
                      <div className="w-[275px] h-[175px] rounded-[8px] bg-[#D9D9D9] flex justify-center items-center">
                          <img src="/file.svg" alt="file" className="w-[85px] h-[85px]" />
                      </div>
                      <div className="flex flex-col justify-start items-start w-[100%]">
                          <p className="text-[18px] font-bold">{project.name}</p>
                          <p className="text-[18px] text-[#000000]">{project.time}</p>
                      </div>
                  </div>
              ))
          ) : (
              <table className="w-full">
                  <tbody>
                      {projects.map((project, index) => (
                          <tr key={index} className="border-b border-[#CACACA] hover:bg-[#C1C1D08C] transition-colors cursor-pointer">
                              <td className="p-[12px]">
                                  <img src="/file.svg" alt="file" className="w-[34px] h-[34px]" />
                              </td>
                              <td className="p-[12px] text-[18px] font-bold">{project.name}</td>
                              <td className="p-[12px] text-[18px] text-[#000000]">{project.time}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          )}
      </div>
      ...
  }
  ```

- The `Card` component is used to display project details:
  ```typescript:src/components/ui/card.tsx
  import * as React from "react"

  import { cn } from "@/lib/utils"

  const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  ))
  Card.displayName = "Card"

  const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  ))
  CardHeader.displayName = "CardHeader"

  const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
  >(({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  ))
  CardTitle.displayName = "CardTitle"

  const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
  >(({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  ))
  ```

## How to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/themoahmed/LavaLabDevChallenege2024.git 
   ```

2. Install dependencies:
   ```sh
   cd your-repo
   npm install
   ```

3. Run the development server:
   ```sh
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Contact

If you have any questions, feel free to reach out to me at ahmedma@usc.edu.

---

Thank you for the opportunity to participate in the LavaLab Developer Challenge. I look forward to your feedback!

--- 

DISCLAIMER: THIS README IS WRITTEN BY AI.