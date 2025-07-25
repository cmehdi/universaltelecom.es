"use client"

import { sendGAEvent } from "@next/third-parties/google"

export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      sendGAEvent("event", eventName, parameters)
    }
  }

  const trackConversion = (conversionType: string, value?: number, currency = "EUR") => {
    trackEvent("conversion", {
      conversion_type: conversionType,
      value: value,
      currency: currency,
    })
  }

  const trackFormStart = (formName: string) => {
    trackEvent("form_start", {
      form_name: formName,
    })
  }

  const trackFormSubmit = (formName: string, success = true) => {
    trackEvent("form_submit", {
      form_name: formName,
      success: success,
    })

    if (success) {
      trackConversion(formName)
    }
  }

  const trackButtonClick = (buttonName: string, location: string) => {
    trackEvent("button_click", {
      button_name: buttonName,
      location: location,
    })
  }

  const trackPhoneCall = () => {
    trackEvent("phone_call", {
      method: "website_click",
    })
    trackConversion("phone_call")
  }

  const trackServiceView = (serviceName: string) => {
    trackEvent("service_view", {
      service_name: serviceName,
    })
  }

  return {
    trackEvent,
    trackConversion,
    trackFormStart,
    trackFormSubmit,
    trackButtonClick,
    trackPhoneCall,
    trackServiceView,
  }
}
