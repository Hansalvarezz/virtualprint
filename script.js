// Número de WhatsApp
const WHATSAPP_NUMBER = "+526141674094"

// Manejo del formulario
document.getElementById("serviceForm").addEventListener("submit", (e) => {
  e.preventDefault()

  // Obtener valores del formulario
  const fullName = document.getElementById("fullName").value
  const phone = document.getElementById("phone").value
  const company = document.getElementById("company").value
  const service = document.getElementById("service").value
  const printerModel = document.getElementById("printerModel").value
  const message = document.getElementById("message").value
  const preferredDate = document.getElementById("preferredDate").value

  // Crear mensaje para WhatsApp
  let whatsappMessage = `Nueva Solicitud de Servicio - Virtual Print Service\n\n`
  whatsappMessage += `Nombre: ${fullName}\n`
  whatsappMessage += `Teléfono: ${phone}\n`

  if (company) {
    whatsappMessage += `Empresa: ${company}\n`
  }

  whatsappMessage += `Servicio: ${service}\n`
  whatsappMessage += `Modelo de Impresora: ${printerModel}\n`

  if (preferredDate) {
    whatsappMessage += `Fecha Preferida: ${preferredDate}\n`
  }

  if (message) {
    whatsappMessage += `\n Detalles Adicionales: \n${message}`
  }

  // Codificar el mensaje para URL
  const encodedMessage = encodeURIComponent(whatsappMessage)

  // Crear URL de WhatsApp
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

  // Abrir WhatsApp en una nueva ventana
  window.open(whatsappURL, "_blank")

  // Limpiar formulario
  document.getElementById("serviceForm").reset()

  // Scroll suave al inicio
  window.scrollTo({ top: 0, behavior: "smooth" })
})

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Establecer fecha mínima como hoy
const today = new Date().toISOString().split("T")[0]
document.getElementById("preferredDate").setAttribute("min", today)
