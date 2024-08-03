import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ title, children }) {
  return (
    <Section title={title} className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
        <ul role="list" className="mt-8 space-y-8">
          {children}
        </ul>
      </div>
    </Section>
  )
}

function Tool({ title, href, children, imgSrc }) {
  return (
    <Card as="li" className="flex items-start p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
      {imgSrc && (
        <div className="flex-shrink-0">
          <a href={href} className="block h-16 w-16 flex items-center justify-center">
            <img src={imgSrc} alt={title} className="h-16 w-16 object-contain" />
          </a>
        </div>
      )}
      <div className="ml-4">
        <Card.Title as="h3" className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          <a href={href}>{title}</a>
        </Card.Title>
        <Card.Description className="mt-2 text-gray-600 dark:text-gray-400">
          {children}
        </Card.Description>
      </div>
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
      intro="Here’s a list of all of my favorite stuff."
    >
      <div className="space-y-20">
      <ToolsSection title="Development Tools">
          <Tool 
            title="Visual Studio Code" 
            href="https://code.visualstudio.com/" 
            imgSrc="https://code.visualstudio.com/assets/images/code-stable.png"
          >
            Meet my coding sidekick, Visual Studio Code. Simple, powerful, and tailored to my style. Coding is an art, and with VS Code, every line is a stroke on the canvas of innovation.
          </Tool>
          <Tool 
  title="Jupyter Notebook" 
  href="https://jupyter.org/" 
  imgSrc="https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg"
>
  Jupyter Notebook is a powerful tool for interactive data science and machine learning. It provides a flexible environment for exploratory data analysis and computational experiments.
</Tool>

<Tool 
  title="Google Colab" 
  href="https://colab.research.google.com/" 
  imgSrc="data:image/png;base64,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"
>
  Google Colab offers a collaborative environment for running Jupyter notebooks in the cloud. It supports GPU acceleration and is excellent for machine learning projects and team-based data science tasks.
</Tool>

          <Tool 
            title="TablePlus" 
            href="https://tableplus.com/" 
            imgSrc="https://tableplus.com/resources/favicons/apple-icon.png"
          >
            Navigating the intricate world of databases is seamless with TablePlus. This sleek tool simplifies my database management tasks, providing an intuitive interface and powerful features. From querying to visualization, TablePlus is the key to unlocking the potential of my data.
          </Tool>
          <Tool 
            title="GitHub" 
            href="https://github.com/" 
            imgSrc="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          >
            In the realm of version control, GitHub is my trusted ally. It’s not just a platform; it’s the heartbeat of my code. From collaboration to version tracking, GitHub empowers me to weave a tapestry of innovation in every repository.
          </Tool>
          <Tool 
            title="PHPStorm" 
            href="https://www.jetbrains.com/phpstorm/" 
            imgSrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDw0NDQ8NDQ0NDQ0NDQ0PDQ8NDQ0NFREWFhURFRUYHiggGBomGxUVITEhJik3Ly4uFx8/RDMtOCgtLisBCgoKDg0OFQ8QFS0dFR0rLS0rKystKysrLS0rNy8tLS0tLSsrKystLSs3Ky0uLS0tLS0rKystKy0rLS8rKysrK//AABEIAKgBLQMBEQACEQEDEQH/xAAcAAADAQEBAQEBAAAAAAAAAAAAAQIDBQQGBwj/xABDEAACAgECBAQCBwIJDQAAAAABAgADEQQSBRMhMQZBUWEHcRQiIzKBkaGx0RUkQkNScoKSshYmMzRUVXOUtMHS4fD/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QANxEAAgIBAwEFBQYFBQEAAAAAAAECEQMEEiExBUFRYXETFVKBoRQiNJGx0TIzcsHxJEJD4fAG/9oADAMBAAIRAxEAPwD4qfYyZ6aQxFQ6KlEhhiUSGHKJBHKJDFCUSCOUSGHHSCSRKJDGlFLOQEUsfaaUlFcszaR06eCsersF9h1M5ZapL+FE3k8D218JpHfc3zMi9TkYu+RuugpH82sm82TxDul4jOhoP82s3tsniFSl4mNnCKW+7uU+xzHjqZrryOskkeDUcGsXqhDj8mnRDVRfXgtHIn1Oa6lThgQfQjE6E01wWSsAYGGjVZOQ6RqsjIdI0EkxqHAGgmBQTAoIQUEwBTBCKAUAAimFAAIrAEUworAEUAAQADB9D+UZMBxhA+WeOioyQwxKJDIYlUhhyiQRiUSGQ5RIYoSiQRyiQx0tDw0vhn+qvkPMyGXOo8R6k5TrodmpFQYUAD2nFJuTtkuX1KLwUMkTvmodIN8NDKI+ZBQdoxZNtG2lc2DabYYamtLRhwD6HzEeDlDoPG49DiavRms5H1l9fT5zrjk3ep1QdmKGZlEjZZFjpGgiDDgNQ8zAFCCgmAEwAmAKYwGKAUAAigCKzCisARQGyIB36n08orMXzcdgBAwCNxmAfPTI8dDBlEhkOVSGGJRIYcqkEYlEhhyiQw5RIJ1uF6LOLHHT+SP+8hmy191CTl3I626clE0iS8NDpEl4aHUSd8NDqIuZNQ6iI2Q7R1EXNm2jKAubDtG2CNs20bYS9mehh2jKBz7q9pyO37IzZVAnWSbGR6q9Ox9vnJuSDaNl0o8zE3g3F/R09/zg3sW2H0ZPebewbmQ2k9G/OMsnijbjCyhl7jp6iOppmtGcc1BMAGigFAzCisARWAIpik9YGAZMVgJJigFmKA4wjpHkDwZRIZDwZVIZBKpDDEokFDlEhhyqQx6+H6bmN1+6vU/ugyT2R8wSdI7+cThJUQXhodIgvGookSXhoookl4aKKJJeGh1Eg2Q0UUSTZDQ6gLmQ0Ookmyag7RcyAO0lnzFYaPTQygdB++QkjbTXmxNptocyCjbR75qBQ98FC0MPBQGig8FCtGdtIbqOh/QxoyaBdHjZSDg95ZOxhGEAooAisAQMworAWO0VgEYgBRWAUBjliUR5A5RDIcqhhyqQUIp6SiQxOJVIZDAz0HcyiGO/o6uWgHmep+c48kt0rJSds0LRUgpEM8ZIokQXjUVSJLw0UUSC8NFVEgvDRRRILzFEiS8FjJEl4LGokvBZhb4rkaw3ybmCzSuzETcZM2FkRyDZYeazWUGhsxQaEFDDTUBooNBQjRYaLQrQWpvHuO0MXQvQ8TDBxLIIoDCisARWAIGApIjABiswjFYBRQHKzKo8hDEqhkOVQw5RDIeZVIYsfdMqkMejhuny289h2+cXLKlQJPuOmXnPQiRmzxkiqRmXjUVSJLw0VSILw0VUSS8xRIgtAUSILRWxiS0RyNZBeTczWSXk3MWyd8VzBYw8XcCzVGi2YpHk9wEzdWjKQ6ZYaMmGyw0dSDYwY6Zig0IGiw0FCtGitFaJtE31buo7/thjKuAJnjMoEIACigHiKYYOIrAXiKwEkRWAWIoDjyqPJQ8yqGQ8yqGQ8yqGQ8yqGNqELdB6x7pWE6aYUADsJB8uxOomeFIeKMy8aiqRJaGiqRBaGisUSWgKpEForY6ILSbkGyS0k5GsktJOQLILSbkCyS0RyBZO6LuAMGawGqNNYyKVusm3yJ3m6NGTGTNVMZMcsGOmEoGOmYYMdMJYMYBYaahWjQNFoRoi2oN1Hf8AbMnQtnmIx3jhFAzBFYAisAw2IrAVzR5iKwC5g9IgDiyyPJQwZVDIcqhkGZVDI0rQscCVQx0aECLgd/MxZcsDGXhSCkQXhookQWhoqkSWhLJCLQMoiC0m2OSWkpSDZBaRlIFkFpFyBZJaTcjWImI5AskmJYBQWYYM1hNEMZMKAN1iN8k2+T0I0ZDJnpqUt2BMeKbKpNmwob0/WUUGNsYFCPKGmgUxZhTAUDKJhKBjgZYaChWUGgoRobAN3/OZcAMHqI7dYbMZmBmFEYBRWAMRQEkRQHM5ZlkeUhis+kqhkWKT8pVDI1SgeZzKoZG6kDoOkokEfMjUGiC0NBSFumoqkcbW2623V16TQq1ttte5KUrDuxAZmx/ZUn8J852v2jqNPnUMcqVJ9F5nn6zVZMWRRg+KNdVwbxBSjWWaHWKijLN9E3bR6nA7e88r31rPj+i/Y5feOo+L6I5fB7+J6+zk6OuzU2Y3FaqQ21fVjjCj3M3vnV/H9F+wfeWo+L6I345Rxjh+36bp7tMrHCvZQBWx69A4G0noemYvvfVfF9Eb3lqPi+iPFw3jF9l1aOwKscEbVHkfaW0vaOoyZowlLh+SL6XX58mWMZS4fkj6ItPdbPesnMk2axExGzE5k2zBFsw5rCMQ2EoGMmEmoFjhRknyiRTk6RKKcnSO3pNAFANnVvTyE7YYUuvU7YYFHr1PUzgdB0laHaMmeABJaCxGQ0ViMWZkxRgyiZigYwGUDMKx5moUe6CjCLQAJOPQRWAgmIwEMYAGRMURs8IeWR5iKDyqGRQeVQyHvlUMg3yqGQ90egi3Q0Mg3TUVR7Ph4f8AOfhn/C1X/S6ifF//AEH4pf0r9WeL2l/NXp+5+k8NTxJ/DtpsLDgnPvxzDpih0+DsCgfXznGP1nhnnnO8OcY4cNX4l4fo9ZRw3VarWFtNqsV7S3KVW2bsK223mnbn+X0mMfLfE3QeJNNw9qtdqauIcN51dj6moAWgZwi29Adu4g+fXHXsJjH5Xwf/AE9X9Y/sM69D+IgdWi/nwPtqtJY/ZTj1PQT6tY5PuPrI4pPuPQvCm82UfrN7B97LLTPvZ+peGuH6DTcFp1mq0Wn1TIbRY509L2vnVMg6t3xkefYTwNRDLLWPDCdfN10s+e1GPNPXPT45182l0s10vCeD8cqvqo0g0V1Sgh0qrpdSc7XGw4YZHUH/ANxM0dTpJJzlafz/AFF1ENXoZRc5bk/O/wBSOOcAv1HBOH6OioPqQ2lR8YAXajBmLeQGO8jjyqOeUpPjklhzRhqpzk+OT4Xivw/4hpDQHWp1vuroWytyyJY7BVD5AIGT3xid2PVwndd3J6uHX4sm6rtJv5I9KfDPiZtNOykAIHNxt+xGSQFzjJboegHTp6wfbsVWJ70wbd3Pp3j0fgDUrrtLpNaOXVe7fa1tuWxEUuwU+RwMdR59pR6mMsE8kHyu7v5KT1kJ6bJlxvmPd388H2vFNZwjhd30N+FptVUzd9GqYsCM5DP9Z8Z6nPfM59Np9Tmh7SGWn4W/7HDpNLrM+P22PNT8Lf8AboLgHAtBr9TqL6KQ/DlQVKGexf419Ryyr0IXa2OvmDKajV6jDjjCcqyde7oU1Wt1WDFHHOVZevd06c+fB8r4h8LarT6lKkrD/S7dR9FqqYu3LRgcNnthWXqT5Gehp9fjnj3SdbUrbPQ03aWLJicpOnFK2/E9Fnw94kqb9tDHGeUt32ny6gLn8ZJdq6duufWiXvjTuVc+tHM4T4a1erXUNUqL9FYpctrGt1YAkjGPaWy63FicU3e7pRXNr8OJxTd7ulcnup8CcQcV/UpRra2sFb2lXVQV+8MdD9YdJKXaeBN8t15EZdqadN8t15Dq8AcSdGsFdS4LAVtbtsfBxkDGMHyyRA+09OnVv8hZdqadOrf5E6DwHxG+vmiuukEZVLrDXa39nBx+OI0+08EJbbb9OhsnaenhLbbfp0Pn9TQ9LvVaprsrYo6HurD/AO7z0Mc4zipRdpnbCcZxUou0zPMqEeZgBmBgDMVgETFYCCYBWyGaK0I2ZFopJyOfmVRwoYMqhigZVDIeZWIw8yqGGDKoYMwjIMxWyiF4X41Rw7juh1urYpp6ar+Y4RnI3UXIvRep+swnxXb7/wBUv6V+rPF7S/mr0/c8XjLx3rdVqtcNPxDWHQW6i40Vi62pDQWO1dvQ4x5GeIeeaeBNVwA0X6XjdOoW22xXq19TM3KUDAUKvVe58mByO2BMY+l4/wCLOD6Dguo4Lwa/Va86tyWt1Cuq0KSpbG5U8l6AL3JOfXGPzXw3/renz/TP+Ezu7N/FY/U7ezvxOP1P0dr59oz7ZEG+Ix0fqnh86U8AqOuLLpc2c0rvJH8bbb9wZ+9tny2qlkWvk8X8fd+XmfKauWVdpSeH+Piunw+Z4K/FXCeGVW/wYr3XWgdWW0DIzjc1mDgZPQD98pLS6rUyXtnSXp/Y6JaLXaycftDqK9PokevjnErauBaS2ux0stXTK9isVchlJOCO2SJLBjhLWSjJWlZPR4cU+0pxnG4py4PZ4d1j6jhOlsuZrX+ladd7ncxC65AuT5nAHX2ktTGMNTJRVKn+hHWwhi12SONVGnx6xZyPipxHU026ZUe2rTmssGrdkDXbjkEj0G38509lwxSUnJJy8/A7ewMWnnCbnFOd9/gdLXXauzhGitw54jzNM2n6DmNabMAkH1rJJz5E5nPD2UdTOP8Ax836f56HFBYI63JH/h5T8K/z0+Rza/HxNi6LivD/AK5YVuAu/LE4H2LjqPkT7Sz0FL2mDJx/7vKz7M2x9tps3H5fVH0XDOEV6HiJXTFq6NTo7rW0wduSlyW1Auq5wMhgPwnJlzyzYfv8yTXPfXJ5+bUyz4F7TmUWlffVPg43gDUNdruMm2yy22i966FtsZ+VW1tm5UyfqglK84/orL61KOLFtVJrnz6f9l9dFRw4VFUmua73x1/NnyPhvjXE24rSj2ahrn1ITU0OzFFr3faAp2UKuSOnTE79Rg060zaSquH+h36jBplpm0lVcPz7j9Yo5dep17oBu5WmsuA83C2Dr77VX9J4TbcIJ+dHgNuUIJ+dHxvw24/qeIazVPqbC4FG6uvACVBrBlVA+QHXr0npdoabHhxwUF38+Z6XaGnx4ccFBevmZ+C+Mam7jOsqtvtsqb6X9kzlq12WgLtU9FwOnSNrMGOOlhKMafH1Q2swY46WEoxp8c+qJ0XGdS3iJqTfaaTddTyd55PLWliMJ2ByoOe8M8GNaFT2/e4d9/U08GNaFT2/e4d9/U4HxHwOKarHTK6cn3PJWeh2X+Gj8/1O7s1/6ePzPm8z00d1hmNQLDMDQLDdFoWyS0WhWyGaChHIzZorRKUjMtFJOR4sx0c6HmVQw8yqGQ8yqGQ8yqGQZlUMGZmxkw3SMmMmfO8a01l+pSqmuy61qxtrrRrLGxuJwo6noCfwnxvbv4lf0r9WeN2h/NXp+5n/AJL8S/3fxD/k7/8AxnjHAePX8M1GlKjU0X6cuCUF1L1FgO5G4DMxjyTGOhwE41NP9Y/4TO3s78Vj9Tt7O/E4/U+5Nk+xlI+x3i5ki5B3n0K+L7Bw3+CuSnL6/bbm39bub27d+k856RfaPb7ufD5UcH2JfavtO7nw+VHzvMnU5Hpbz6LiPi99RoKOHGlFSgVYtDks2xSOo98zghpVDM8t9b+p52HQrHqJZ93Lvj1Ol4V8YOlej4Xyk5bazT5uLkMM6pX7dvaQ1OluUst9z4+RDXaFSnk1G7mnx8qPqfGvjazhusSpa6dVp301dmxjhlt5jjIYZ8gOhHl5Tj02kWWDd07PM0PZ8dRictzjJP6cHxfF/iJrtRdVdWV0y0EtXUn11JIwS+773QkdhjP4zvx6HFGLT5bPTxdl4IQcZfeb7/2OtV8W7wo5mjoewD762PWufXaQT+si+zFfE+Dkl2PG/uz4OFT8QNYuu/hBxXY3KNHIwVqWgsG2r5g5AOev5dJ0PQ43i9mvWy8uz8XsfZLxu/M24t8SNVdqNNqaK69K2mFyhQxtFy2bN62dsj7Nf39oMfZ8IwlGTu/7EsfZ0IwlCTu6+Vf5Onb8W7yp2aPTpeVwbjYzr/dwD+G6SXZavmfBBdlq+Z8HH4H4+1GlGsNiLqbNa++213KkHZtwABjGOw8sTpy6CE9tOlEvm0MJ7adKJ5PCHih+FWW2V1Jcba1rIdigABznpL6rSrUJJuqK6rTrUJJuqL4F4mfR6y3XLUjvbz81liqrzH3Hr7R82kWXDHFdVX0GzaZZcSxXVV9Ao8SOnETxMVobDbZbydx2ZZCmM9/OGWkTwewvjx+ppadPB7C+PH6mPiDjTa/U2at0WtrBWCisWA2qF7n5S2l0/sMaxp3Q2nxLDjUE7PAHnWkX3D3ylA3Ar9YHEDYmeK4iuRBeK0TciGeK0TciC0RknIjdEZNs80ZCoJVDDzKoZBmUQyHmVQyDMpYQzFkzWSWkJSGs59lmro1VWr0TNVdUhCWqVDKSGU4z7MR+M+b7U0WbPmU4RtV4rzPO1eDJkncVxR1P8tfEf+33/nT+6eb7r1Pw/VHL9izeBy+PW8W4ka211r6k1BhWXev6gbGcYx6CP7n1fwfVFPd2o+H6o5J4HqP6A/vr++B9k6pf7fqje7tR8P1R6eGcKururdlAVSSTuU+RltJoM+LNGco8LzR0aTRZseaM5R4Xmj6UtPfbPoNwt0m2HcG6TbDuDfFbG3BviNm3CLRTbid0wu4ReGxXIktDYrkSWhsRsW6GxGw3RkLYw0dGstXlECzVGlYoZMOZ1h7xXIoWR0jbig8rFG3Fb5ZRBuBX6iBxA5CZ4jQjkSXiNCNklpNiNizJsm2TmTYpjCjIJVDIJVDIMyqGQ8yiYRZhs1izFbNYSTGFJMJVQyRBBXJFIdUewvOiUjq3GbNOeTBuILSLZrFukmzWLdEYbDdEYbFuis1i3RTWG6KaxZmBYszCtk5hFbFmEFhmMhbDMZAsYMogFLKxRjQtgS38KC3SMw0WJKyw0vENlBpaKBZQaVQLGrdZmaxM0mxWxbpJisWZNiMMyTFYZk2KZTIyKrQscDqZVDI6Wn0Va9bDuPoOglUMj31modq0/LMan4hKeiizuij3XoYfvrvNyczXcKKAtWd6eY/lCUjNPh8MZOznYj0EWJNxGDEk4hKq7xY8MeHU1zGky1kkyMjWSTJM1kkybDYZiM1izEYbDMVmsMwGsWYDWImAFizMCxQ0KGIyRgxGSAMCOkAsLKxiGiiQveW4iuTNpdTFnzEctzJOVjEpEUoGXiYoGWiAYMpZigZmYRMmwMMyTFYSTEYSTAEmxSJkZHrqO0dO/nKoZFc2VQyLW2UQyNFulUE3q1RELgmGjxcRrC/XUdG7j0MZSpcmvg55cmRlNsG5kkyEg2Os9YsXyPF8m+ZRlrFJMxMmw2KTaMERhsUVoNhFNYswGsUWjWE1AGFhUTUVslFEag6eohSXiDjxDK+ojLb4guPiI2qPPMbfBCucUSb/AEE3tfBCPL4Gec94Fb6k27GJVAKErFGKEtExUugDjGGDAYDJsApNisckxQzJMUJNigneZGRRaUQyPfwPhV+vvTTaZQ1r5PU7URB3Zj5ATZc8MMHOb4RpzUFuZ2vFngvUcJqquvtpsW2zlYr35VtpbzHboZLRdow1MnGMWmueRMOojkbSR80GnqJnSWryiYyNXO5GX2/WM1ZqOUZyMmImTYQBxJ9ApnqHrOirVnShGSaMTJtBEZNowojQRRTWEWjWEFGFBRigIVEKKPT5x6oboZNEZJsgxaEZJE1CsWIVEUYEokYoSiRihKpGGJWKAVLRAMSiMOGzBM2EJNsVhJMUJJihJsVhJMBazIxLGVQyP0r4H11nU6xyx5y6dFRMDaamcFmz3zlVGPf8vJ7ZlL2cF3Wcmsb2pdx+o+INTTRpb79Si2001tayMquGK9gAemScAfOeJp4TnljCDpt0ccE3JJdWfzMDPv0e4WDKJjGyNKJjHObznJLqyLFEZhSTCbad/L8pXFK/ulscu41IjSRUkyTRiTJtGFEaMKI0YMQUEMTUYoLCojJDZwvuZm1EzkohnPWHqa7M2EVxEZBEWhGLE1ChiNQAxHSAOUSMOUSAUJWKMOVQo4wQmMEDMEm2KOSbFCTbAEkxWEmxTSBMyJcSqYyN+HcRv0r83TXW0WYwWrdkLLnO1sdx0HQwzxwyLbNWvMzipKmrPt/EfxPs1+lt0n0OqoXLsdzc1uBkHKjauDkes4NN2VHDkWTe3XlX7kMelUZKW7ofAAz20zsKEqmMWWwDHugnjzOYmKKwCiNBDOOsTpyFM9Vdgb5zphNTXmdEZqXqMiCURicSTRhYiOJgxF2hHtm2hoeMd4dqXUboQ9vp+clKfchJZPAyk6J2AbEy4NdGgYH5yyaY6lYFZtoGiSJtorFiFRFDEdRAPEdRMPEokAcokAI4BzBCYwRWwBJtijxJNgDEm2KPEk2KPEm2KQbx5AzIyI5/X2lExjXHmO0omMhSiYRyqYxQlExkRe3lDOXFGbMJEQJjAZmjCk2gkyfQ1myagjv1/bKLO115KrK11NBcp9o/tYMoskWPmL6wboeId8fERtX5xXOBvaRIN/oMSby+CA8vgZsxPeSbb6iOTfUIKNYTUaxTUAJjGi2estGfiMp+JoMHtLJJ9BuGG2NsBQtsKgANsdQFDEdRAGI1ADE1GDE1GHiKzBiTbFHiTbFHiTbAPEk2Kx4k2xSGuA94gp5IWjJgTCmMNLSvy9JVMY9CXKfaUTCjTp6j85RMYh7QO3Ux91BswJz1guwBMYUxhmZmYorMIxGjCiNGCLQQi0EJqCOagjmoNhNRgmo1hDRrCGgBDRhgxlwazRbvXrLRytdRlPxNBYp9p0RnBh3osAGXUUwj2xtoKFtitIAtsVgDbEbAG2TbAPbJtih0k2xSTao85JsBm2o9B+cm2KZNYT3MmxWRGSFbP//Z"
          >
            PHPStorm is my IDE of choice for PHP development. It provides intelligent code assistance, debugging, and testing capabilities that streamline my development workflow. With its robust features and seamless integration with various tools, PHPStorm enhances my productivity and code quality.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Workstation">
          <Tool title="MacBook Air M2" href="https://www.apple.com/macbook-air-m2">
            Unleashing the potential of sleek sophistication, my go-to workhorse is the MacBook Air with the formidable M2 chip, boasting 8GB of memory and a spacious 256GB internal storage. This lightweight powerhouse is my trusted companion, seamlessly blending efficiency with elegance. Whether diving into code, designing interfaces, or exploring data, this MacBook Air is the driving force behind my digital pursuits.
          </Tool>
          <Tool title="Dell Monitor" href="https://www.dell.com/en-us/shop/monitors/se2717hr">
            Dive into the visual realm with the Dell SE2717Hr, a 27 IPS LED Full HD Monitor that graces my workspace in sleek black elegance. Its expansive screen and vibrant colors breathe life into every pixel, providing a canvas for my creativity and productivity. Whether coding, designing, or immersing myself in data, this monitor is the window to a world of digital possibilities.
          </Tool>
          <Tool title="Apple Magic Mouse" href="https://www.apple.com/magic-mouse">
            Navigating the digital realm with finesse, my work companion is the White Magic Mouse with a Multi-Touch surface. Its seamless design and intuitive touch controls elevate my daily interactions with the digital canvas. From swift scrolls to effortless swipes, the Magic Mouse adds a touch of magic to my workflows, making every task a spellbinding experience.
          </Tool>
          <Tool title="FWD Gaming Desk" href="https://www.fwdgaming.com/d/55-inch-gaming-desk">
            Elevating my gaming and work experiences is the FWD Computer Desk, a spacious 55-inch gaming desk that serves as the epicenter of my creative endeavors. With ample space for multiple monitors, peripherals, and a dedicated gaming setup, this desk blends form and function seamlessly. It’s not just a piece of furniture; it’s the command center where I bring ideas to life, conquer virtual realms, and embark on digital adventures.
          </Tool>
        </ToolsSection>
        
      </div>
    </SimpleLayout>
  )
}
