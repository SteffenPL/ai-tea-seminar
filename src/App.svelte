<script>
  import { pastSeminars, upcomingSeminars } from './content.js';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700&family=Spectral:wght@500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header class="site-header">
  <a href="/" aria-label="AI Tea Seminar home">
    <svg class="tea-leaf" viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M6.6 20.8C8.5 11.2 17.2 5.7 27 5.7c-.2 9.7-6.5 17.8-15.7 19.6-2.4.5-4.4-1-4.7-4.5Z"
      />
      <path class="tea-leaf-vein" d="M10.4 21.3c4.8-4.8 8.5-7.6 14.2-11" />
    </svg>
    <span>AI Tea Seminar</span>
  </a>
</header>

<main class="page-shell">
  <section class="hero" aria-labelledby="page-title">
    <p class="eyebrow">Weekly informal research tools seminar</p>
    <h1 id="page-title">AI Tea Seminar</h1>
    <p class="intro">
      Weekly update on new AI tools for research. 
      The scope is to learn about AI tools useful in research, update ourselves on the fast growing
      landscape and share useful patterns.
    </p>
    <p class="intro">  
      <b>Format:</b> Each seminar is composed of a short demonstration talk followed by an open discussion.
      Instead of talks with slides, we aim at hands-on demonstrations on the screen: 
      <i>Show us what you use and how you actually use it.</i>
    </p>
    <p class="intro">  
      <b>Call:</b> Please contact me if you would like to give a short demo of some tools.
    </p>
  </section>

  <section class="seminar-section" aria-labelledby="upcoming-heading">
    <div class="section-heading">
      <h2 id="upcoming-heading">Upcoming Seminars</h2>
      <span>{upcomingSeminars.length} scheduled</span>
    </div>

    <div class="seminar-list">
      {#each upcomingSeminars as seminar}
        <article class="seminar-item">
          <div class="seminar-copy">
            <h3>{seminar.topic}</h3>
            <p>{seminar.speaker}</p>
            <p class="discussion">+ discussion</p>
          </div>
          <div class="seminar-meta">
            <time datetime={seminar.date}>{seminar.date}</time>
            <span>{seminar.time}</span>
            <span>{seminar.room}</span>
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
          <article class="seminar-item">
            <div class="seminar-copy">
              <h3>{seminar.topic}</h3>
              <p>{seminar.speaker}</p>
              <p class="discussion">+ discussion</p>
            </div>
            <div class="seminar-meta">
              <time datetime={seminar.date}>{seminar.date}</time>
              <span>{seminar.time}</span>
              <span>{seminar.room}</span>
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
