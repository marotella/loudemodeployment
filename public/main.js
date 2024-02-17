document.querySelector("#button").addEventListener('click', () => {
  const louFacts = ["No matter how old she is, she is always a baby.","She loves tuna more than anything.","She is always weating a tuxedo.", "She will not hestiate to give you the sassy paw.","She is everyone's favorite.", "There are only two things she dislikes: birds, and strangers."]
  const displayFact = louFacts[Math.floor(Math.random() * louFacts.length)]
  document.querySelector("#content").textContent = `${displayFact}`;
})