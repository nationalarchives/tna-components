export const Data = {
  noFieldsetData: {
    legend: "We'd like to hear from you",
    commentData: {
      id: 'comment_for_satisfaction',
      commentLabel:
        'Your feedback helps us improve our services. Please share any comments below.',
      commentWarning: 'Please do not include personal contact details.'
    },
    gtmData: {
      cancel: {
        event: 'DiscoveryFeedback',
        eventCategory: 'DiscoveryFeedback',
        eventAction: 'Cancel',
        eventLabel: 'Cancel feedback'
      },

      nothingToImprove: {
        event: 'DiscoveryFeedback',
        eventCategory: 'DiscoveryFeedback',
        eventAction: 'Send Feedback: Nothing to improve',
        eventLabel: 'No comments made'
      }
    }
  },
  yesFieldsetData: {
    legend: 'Please let us know why you are dissatisfied',
    commentData: {
      id: 'comment_for_dissatisfaction',
      commentLabel:
        'Your feedback helps us improve our services. Please share any comments below.',
      commentWarning: 'Please do not include personal contact details.'
    },
    checkboxData: [
      {
        id: 'did-not-understand',
        labelText: 'I did not understand the information on the page'
      },
      {
        id: 'too-much-information',
        labelText: 'There was too much information on the page'
      },
      {
        id: 'expected-the-record',
        labelText: 'I expected to see the record itself, not just a description'
      },
      {
        id: 'access-the-record',
        labelText: 'I did not understand how to access the record'
      },
      {
        id: 'did-not-know-was-tna',
        labelText:
          "I did not realise I was looking at The National Archives' UK website"
      },
      {
        id: 'not-enough-information',
        labelText: 'There was not enough information'
      },
      {
        id: 'other',
        labelText: 'Other'
      }
    ],
    gtmData: {
      cancel: {
        event: 'DiscoveryFeedback',
        eventCategory: 'DiscoveryFeedback',
        eventAction: 'Cancel',
        eventLabel: 'Cancel feedback'
      },
      gtmBody: {
        event: 'DiscoveryFeedback',
        eventCategory: 'DiscoveryFeedback',
        eventAction: 'Send Feedback: Something to improve',
        eventLabel: ''
      }
    }
  },
  messageText: {
    thankyou: 'Thank you for your feedback'
  }
};
