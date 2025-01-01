from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Contact
from .serializers import ContactSerializer
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings


@api_view(['POST'])
def contactview(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        contact = serializer.save()
        try:
            # Send an email
            send_mail(
                subject=f"New Contact Message from {contact.first_name} {contact.last_name}",
                message = f"""
                Hello,

                You have received a new message from the contact form on your website. Here are the details:

                ---------------------------------
                Name           : {contact.first_name} {contact.last_name}
                Email          : {contact.email}
                Phone Number   : {contact.phone}
                Topic          : {contact.topic}
                ---------------------------------

                Message:
                ---------------------------------
                {contact.message}
                ---------------------------------

                Please address this inquiry at your earliest convenience.

                Thank you,
                Your Website Team
                """,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=["djangomake143@gmail.com", contact.email],  # Replace with your recipient email(s)
                fail_silently=False,
            )
            return Response({"message": "Contact message received and email sent successfully!"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": f"Message saved, but email failed: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)