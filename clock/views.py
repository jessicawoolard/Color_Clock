from django.shortcuts import render
from django.views.generic import TemplateView


class ColorClock(TemplateView):
    template_name = "home.html"

