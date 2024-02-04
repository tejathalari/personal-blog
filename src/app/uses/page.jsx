import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Things I recommend, devices I adore, and software I use on a regular basis.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Things I recommend, devices I adore, and software I use on a regular basis."
      intro=" Here’s a list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Air, M2 chip, (2022)">
          Unleashing the potential of sleek sophistication, my go-to workhorse is the MacBook Air with the formidable M2 chip, boasting 8GB of memory and a spacious 256GB internal storage. This lightweight powerhouse is my trusted companion, seamlessly blending efficiency with elegance. Whether diving into code, designing interfaces, or exploring data, this MacBook Air is the driving force behind my digital pursuits.
          </Tool>
          <Tool title="Dell Monitor">
          Dive into the visual realm with the Dell SE2717Hr, a 27 IPS LED Full HD Monitor that graces my workspace in sleek black elegance. Its expansive screen and vibrant colors breathe life into every pixel, providing a canvas for my creativity and productivity. Whether coding, designing, or immersing myself in data, this monitor is the window to a world of digital possibilities.
          </Tool>
          <Tool title="Apple Magic Mouse - White">
          Navigating the digital realm with finesse, my work companion is the White Magic Mouse with a Multi-Touch surface. Its seamless design and intuitive touch controls elevate my daily interactions with the digital canvas. From swift scrolls to effortless swipes, the Magic Mouse adds a touch of magic to my workflows, making every task a spellbinding experience.
          </Tool>
          <Tool title=" FWD Computer Desk - 55 inches Gaming Desk">
          Elevating my gaming and work experiences is the FWD Computer Desk, a spacious 55-inch gaming desk that serves as the epicenter of my creative endeavors. With ample space for multiple monitors, peripherals, and a dedicated gaming setup, this desk blends form and function seamlessly. Its not just a piece of furniture; is the command center where I bring ideas to life, conquer virtual realms, and embark on digital adventures.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
          Meet my coding sidekick, Visual Studio Code. Simple, powerful, and tailored to my style. Coding is an art, and with VS Code, every line is a stroke on the canvas of innovation.
          </Tool>
          <Tool title="Jupyter Notebook & Google Colab">
          My data science journey is powered by Jupyter Notebook and Google Colab. These dynamic tools turn complex coding into an interactive and collaborative experience. From exploratory data analysis to machine learning experiments, they are the magical scrolls where data stories come to life.
          </Tool>
          <Tool title="TablePlus">
          Navigating the intricate world of databases is seamless with TablePlus. This sleek tool simplifies my database management tasks, providing an intuitive interface and powerful features. From querying to visualization, TablePlus is the key to unlocking the potential of my data.
          </Tool>
          <Tool title="GitHub">
          In the realm of version control, GitHub is my trusted ally. Its not just a platform; its the heartbeat of my code. From collaboration to version tracking, GitHub empowers me to weave a tapestry of innovation in every repository.
          </Tool>
        </ToolsSection>
        {/* <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection> */}
      </div>
    </SimpleLayout>
  )
}
