from django.shortcuts import render


def showIndex(request):
    """
    시작페이지를 보여주기
    """
    return render(request, "index.html")
