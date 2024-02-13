<template>
  <div class="resume-container">
    <img src="../../src/components/resume/resume.png" alt="My Resume" class="resume-image"/>
    <div class="download-container">
      <a href="/resume.pdf" download="resume.pdf" class="download-link">Download My Resume (PDF)</a>
    </div>
  </div>
</template>

<style scoped>
.resume-container {
  display: block;
  flex-direction: column;
  align-items: center;
}

.resume-image {
  padding-top: 50px;
  max-width: 80%;
  height: auto;
  transform: scale(1);
  transform-origin: top;
  padding-bottom: 20px;
}

.download-link {
  text-decoration: none;
  color: #fff; /* Adjust color as needed */
  background-color: #43aa8b; /* Adjust background color as needed */
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: bold;
  margin-bottom: 20px;
}

.download-link:hover {
  background-color: #367a59; /* Slightly darker on hover */
}

@media (max-width: 768px) {
  .resume-image {
    max-width: 95%;
  }
}

</style>
