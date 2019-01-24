from django.shortcuts import render
from django.views.generic import TemplateView
from datetime import datetime


class ColorClock(TemplateView):
    template_name = "home.html"

    def get_context_data(self, **kwargs):
        current_time_string = datetime.now().strftime("%H:%M:%S")
        return {'current_time': current_time_string}

