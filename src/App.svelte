<script>
  import { pastSeminars, upcomingSeminars } from './content.js';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header class="site-header">
  <a href="/" aria-label="AI Tea Seminar home">AI Tea Seminar</a>
</header>

<main class="page-shell">
  <section class="hero" aria-labelledby="page-title">
    <p class="eyebrow">Weekly informal research tools seminar</p>
    <h1 id="page-title">AI Tea Seminar</h1>
    <p class="intro">
      Weekly seminar to chat informally about AI tools for research. Each seminar is 45 minutes
      and features one informal talk: no-slides but laptop demonstration, showing tools and
      webpages; followed by open discussion.
    </p>
    <p class="scope">
      The scope is to learn about AI tools useful in research, update ourselves on the fast growing
      landscape and share useful patterns.
    </p>
  </section>

  <section class="seminar-section" aria-labelledby="upcoming-heading">
    <div class="section-heading">
      <h2 id="upcoming-heading">Upcoming Seminars</h2>
      <span>{upcomingSeminars.length} scheduled</span>
    </div>

    <div class="seminar-list">
      {#each upcomingSeminars as seminar}
        <article class="seminar-card">
          <div class="seminar-meta">
            <time datetime={seminar.date}>{seminar.date}</time>
            <span>{seminar.time}</span>
            <span>{seminar.room}</span>
          </div>
          <div class="seminar-copy">
            <h3>{seminar.topic}</h3>
            <p>{seminar.speaker}</p>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section class="seminar-section" aria-labelledby="past-heading">
    <div class="section-heading">
      <h2 id="past-heading">Past Seminars</h2>
      <span>{pastSeminars.length} archived</span>
    </div>

    {#if pastSeminars.length}
      <div class="seminar-list">
        {#each pastSeminars as seminar}
          <article class="seminar-card seminar-card--past">
            <div class="seminar-meta">
              <time datetime={seminar.date}>{seminar.date}</time>
              <span>{seminar.time}</span>
              <span>{seminar.room}</span>
            </div>
            <div class="seminar-copy">
              <h3>{seminar.topic}</h3>
              <p>{seminar.speaker}</p>
            </div>
          </article>
        {/each}
      </div>
    {:else}
      <p class="empty-state">No past seminars yet.</p>
    {/if}
  </section>
</main>

<footer>
  <span>Organizer</span>
  <strong>Steffen Plunder</strong>
</footer>
