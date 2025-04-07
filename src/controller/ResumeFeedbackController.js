

const getRandomSuggestions = () => {
    const suggestions = [
      "Use more action verbs in your resume.",
      "Add a summary section at the top.",
      "Include quantifiable achievements for each role.",
      "Use a consistent font and formatting style.",
      "Keep your resume concise (1-2 pages).",
      "Optimize for Applicant Tracking Systems (ATS) by using relevant keywords.",
      "Highlight your technical skills more prominently.",
      "Ensure your contact information is up to date.",
      "Consider adding a professional profile link (e.g., LinkedIn)."
    ];
  
    return suggestions.sort(() => 0.5 - Math.random()).slice(0, 3);
  };
  
  const analyzeResumeText = (text) => {
    const feedback = [];
  
    const lowerText = text.toLowerCase();

    if (!text || text.length < 50) {
      feedback.push("Resume text is too short for meaningful feedback.");
      return res.status(200).json({
        message: "AI Resume Feedback",
        feedback
      });
    }
  
    if (!lowerText.includes("email") && !lowerText.match(/\b\d{10}\b/)) {
      feedback.push("Consider adding your email or contact number.");
    }
  
    if (!lowerText.includes("education")) {
      feedback.push("Add an education section to provide academic background.");
    }
  
    if (!lowerText.includes("skills")) {
      feedback.push("Include a dedicated skills section to highlight your competencies.");
    }
  
    if (!lowerText.includes("experience") && !lowerText.includes("work history")) {
      feedback.push("Add a section for work experience or previous roles.");
    }
  
    const weakVerbs = ["responsible for", "helped", "worked on", "did"];
    weakVerbs.forEach(verb => {
      if (lowerText.includes(verb)) {
        feedback.push(`Replace vague verbs like "${verb}" with strong action verbs.`);
      }
    });
  
    return feedback;
  };
  
  const getResumeFeedback = (req, res) => {
    try {
      const { resume_text } = req.body;
      console.log('resume text: ',resume_text);
  
      const contextualFeedback = analyzeResumeText(resume_text);
      const randomSuggestions = getRandomSuggestions();
  
      const feedback = [...contextualFeedback, ...randomSuggestions].slice(0, 5);
  
      res.status(200).json({ message: "AI Resume Feedback", feedback });
    } catch (error) {
      res.status(500).json({
        message: "Error generating feedback",
        error: error.message
      });
    }
  };
  
  module.exports = { getResumeFeedback };
  